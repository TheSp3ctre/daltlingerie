import { useState, useId } from "react";

interface FloatingLabelInputProps {
  label: string;
  type?: string;
  name: string;
  required?: boolean;
  textarea?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FloatingLabelInput = ({
  label,
  type = "text",
  name,
  required = false,
  textarea = false,
  value,
  onChange,
}: FloatingLabelInputProps) => {
  const [focused, setFocused] = useState(false);
  const id = useId();
  const hasValue = value && value.length > 0;
  const isActive = focused || hasValue;

  const baseClasses =
    "w-full bg-white border-[1.5px] border-rose-border rounded-lg px-4 pt-5 pb-2 font-body text-base text-rose-ink outline-none transition-all duration-200 focus:border-rose-brand focus:shadow-focus-input";

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${baseClasses} min-h-[120px] resize-none`}
          rows={4}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={baseClasses}
        />
      )}
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none font-body ${
          isActive
            ? "top-1.5 text-[11px] text-rose-brand"
            : "top-4 text-sm text-rose-ink-secondary"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
