import { paramsType } from '@/index';
import MailForm from "@/components/home/feedback/MailForm";

export default function feedbackForm({params: { lng } }: paramsType) {
    return (
        <MailForm lng={lng} />
    )
}
