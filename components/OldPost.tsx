export const OldPost = () => {
  return (
    <div className="border-l-4 border-orange-500 bg-orange-100 p-2 text-orange-700" role="alert">
      This content is old. Please read this content keeping its age in mind.
    </div>
  )
}

export const OldPostPill = () => {
  return (
    <span className="btn-primary mr-2 rounded-full border-orange-500 bg-orange-100 px-4 py-1 font-sans text-sm font-semibold text-orange-700 no-underline focus:outline-none">
      Old
    </span>
  )
}
