import Image from "next/image";
import styles from "./CredentialChip.module.css";

interface CredentialChipProps {
    href: string;
    badgeSrc: string;
    title: string;
    subtitle: string;
}

/** Badge image paired with a title/subtitle, linking out to the credential. */
export default function CredentialChip({
    href,
    badgeSrc,
    title,
    subtitle,
}: CredentialChipProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.credentialChip}
        >
            <span className={styles.credentialBadge}>
                <Image src={badgeSrc} alt="" width={72} height={72} />
            </span>
            <span className={styles.credentialText}>
                <strong>{title}</strong>
                <br />
                {subtitle}
            </span>
        </a>
    );
}
