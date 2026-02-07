interface RadioOption {
    value : string;
    label: string
}

interface RadioGroupProps {
    options: RadioOption[];
    value: string;
    onChange: (value:string) => void;
    setTabOption: (value:string) => void;
    tabOption : string
    name:string
}

export default function RadioGroup({options,value, onChange, name, setTabOption , tabOption}:RadioGroupProps)
{
    return (
        <div className="wrapper">
        {options.map((option) => (
            <div className="option" key={option.value}>
          <input
            className="input"
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => {onChange(e.target.value);if (tabOption !== "Challenge"){setTabOption(option.value)}}}
          />
          <div className="btn">
            <span className="span">{option.label}</span>
          </div>
        </div>
      ))}
      </div>
    )
}