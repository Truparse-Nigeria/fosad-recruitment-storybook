export default function Button({ label }: { label: string }) {
    return (
        <button className="py-3 px-6 rounded-full bg-red-400 text-white">{label}</button>
    )
}