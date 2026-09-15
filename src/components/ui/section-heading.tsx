type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  copy?: string;
};

export function SectionHeading({ eyebrow, title, titleAccent, copy }: SectionHeadingProps) {
  return (
    <div className="section-head">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="section-title">{title}{titleAccent ? <><br /><em>{titleAccent}</em></> : null}</h2>
      </div>
      {copy ? <p className="section-copy reading-width">{copy}</p> : null}
    </div>
  );
}
