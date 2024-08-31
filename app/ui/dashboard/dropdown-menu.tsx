interface DropdownProps {
  label: string;
  options: string[];
  onSelect?: (option: string) => void;
}
export default function Dropdown({ label, options, onSelect }: DropdownProps) {
  return (
    <div>
      <label
        htmlFor={`${label}`}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <select
        id={`${label}`}
        name={`${label}`}
        defaultValue="Select"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          onSelect?.(e.target.value)
        }
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
