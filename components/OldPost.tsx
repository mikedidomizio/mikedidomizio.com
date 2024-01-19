import { Pill } from './Pill'

export const OldPost = () => {
  return (
    <div className="border-l-4 border-orange-500 bg-orange-100 p-2 text-orange-700" role="alert">
      This content is old. Please read this content keeping its age in mind.
    </div>
  )
}

export const OldPostPill = () => {
  return (
    <span className="rounded-full bg-orange-100 text-orange-700">
      <Pill>Old</Pill>
    </span>
  )
}

export const NewPostPill = () => {
  return (
    <span className="rounded-full bg-blue-500 text-white">
      <Pill>New</Pill>
    </span>
  )
}
