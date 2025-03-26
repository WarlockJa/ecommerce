"use client";
import { useTranslation } from "@/app/i18n/client";
import { LanguagePropsType } from "@/index";
import { SyntheticEvent, useState } from "react";
import styles from "../../../app/[lng]/feedback/page.module.scss";

export default function MailForm(props: LanguagePropsType) {
  const { lng } = props;
  const { t } = useTranslation(lng, "feedback");

  // message rleated states
  const [feedbackContent, setFeedbackContent] = useState("");
  const [sendingEmail, setSendingEmail] = useState(false);
  const [errorSendingEmail, setErrorSendingEmail] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);

  // sending e-mail
  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    setErrorSendingEmail(false);
    setSendingEmail(true);
    setFeedbackSent(false);

    const headers = {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    };

    const body = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_FEEDBACK,
      subject: "e-commerce feedback",
      message: feedbackContent,
    };

    fetch("/api/sendFeedback", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.status === 200) {
        setFeedbackContent("");
        setSendingEmail(false);
        setFeedbackSent(true);
      } else setErrorSendingEmail(true);
    });
  };

  const formPlaceholder: string = t("message-placeholder");

  return (
    <form className={styles.feedbackForm} onSubmit={handleSubmit}>
      <label htmlFor="feedbackTextarea">
        {sendingEmail
          ? t("sending")
          : errorSendingEmail
          ? t("error")
          : feedbackSent
          ? t("success")
          : t("send")}
      </label>
      <div className={styles.feedbackInputWrapper}>
        <textarea
          name="feedbackTextarea"
          id="feedbackTextarea"
          cols={30}
          rows={15}
          placeholder={formPlaceholder}
          value={feedbackContent}
          onChange={(event) => setFeedbackContent(event.target.value)}
          maxLength={500}
        ></textarea>
        <button type="submit" disabled={sendingEmail || feedbackContent === ""}>
          {t("submit-button")}
        </button>
      </div>
    </form>
  );
}
