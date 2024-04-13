function Form({ children }) {
  return (
    <form className="mb-4 mt-1  flex w-full flex-col gap-12  gap-y-12 px-32  py-10  xl:w-3/4 xl:grid-cols-2 2xl:grid">
      {children}
    </form>
  );
}

export default Form;
