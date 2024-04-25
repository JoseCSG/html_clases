interface TextLabelProps {
  label: string;
  text?: string;
  secondText?: string;
  size?: string;
}

const TextLabel = ({
  label,
  text,
  secondText,
  size = "text-xl",
}: TextLabelProps) => {
  return (
    <p className={`${size} self-start text-white first-letter:text-green-500`}>
      <strong>{label}: </strong>
      {text && text} {secondText && ` - (${secondText})`}
    </p>
  );
};

export default TextLabel;
