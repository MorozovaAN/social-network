import s from "../FormsControls.module.css";
export const ElementControl = ({ input, meta, ...restProps }: any) => {
  const error = meta.error && meta.touched;
  return (
    <div>
      <restProps.element
        className={error ? s.error : ""}
        {...input}
        {...restProps}
      ></restProps.element>
      {error && <p className={s.textError}>{meta.error}</p>}
    </div>
  );
};
