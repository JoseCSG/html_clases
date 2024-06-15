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
    <div className={`flex flex-row ${size}`}>
      <p data-testid="label" className="text-white first-letter:text-green-500">
        <strong>{label}: </strong>
      </p>
      <p data-testid="text-label" className="ms-1 self-start text-white">
        {text && text}
      </p>
      <p data-testid="secondtext-label" className="ms-1 self-start text-white">
        {secondText && ` - (${secondText})`}
      </p>
    </div>
  );
};

export default TextLabel;
