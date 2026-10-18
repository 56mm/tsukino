export default function Container({ children, className = '', as: Element = 'div' }) {
  return (
    <Element className={`mx-auto w-full max-w-wide px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </Element>
  );
}
