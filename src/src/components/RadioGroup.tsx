interface RadioOption {
    value : string;
    label: string
}

interface RadioGroupProps {
    options: RadioOption[];
    value: string;
    onChange: (value:string) => void;
    setExplainationsFor: (value:string) => void;
    name:string
}

export default function RadioGroup({options,value, onChange, name, setExplainationsFor }:RadioGroupProps)
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
            onChange={(e) => {onChange(e.target.value);setExplainationsFor(option.value)}}
          />
          <div className="btn">
            <span className="span">{option.label}</span>
          </div>
        </div>
      ))}
      </div>
    )
}