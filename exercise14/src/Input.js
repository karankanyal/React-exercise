// Your task is to work on the Input component such that it either returns a <textarea> element or an <input> element, depending on whether a richText prop set on Input is true or false.
// I.e., if used like this:
// <Input richText />
// the Input component should render a <textarea>. Otherwise, it should render an <input>.
// In addition, the Input component should forward all other props directly to the returned <textarea> or <input> elements.
// I.e., it should be usable like this:
// <Input type="text" placeholder="Your name" />

export default function Input({ richText, ...props }) {
  if (richText) {
    return <textarea {...props} />;
  } else {
    return <textarea {...props} />;
  }
}
