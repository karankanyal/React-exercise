import "./index.css";

export default function Button({ mode = "filled", Icon, children, ...props }) {
  // Todo: Build this component!
  // !!! Important:
  // Wrap the icon with a <span className="button-icon"> to achieve the target look
  // Also wrap the children prop with a <span>

  let cssClasses = `button ${mode}-button`;

  if (Icon) {
    cssClasses += `icon-button`;
  }

  return (
    <span>
      <button className={cssClasses} {...props}>
        {Icon && (
          <span className="button-icon">
            {/* I have a doubt how this Icon is workling there is no such component */}
            <Icon />
          </span>
        )}
        {children}
      </button>
    </span>
  );
}
