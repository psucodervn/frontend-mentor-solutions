'use client'

import { Space_Mono } from 'next/font/google'
import Image from 'next/image'
import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactElement,
  useState,
} from 'react'

const font = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
})

type Config = {
  bill: number
  tip: number
  people: number
}

import Logo from './_images/logo.svg'
import IconDollar from './_images/icon-dollar.svg'
import IconPerson from './_images/icon-person.svg'

export default function Page() {
  return (
    <main className={`min-h-screen bg-[#B9E0E3] ${font.className}`}>
      <div className="w-screen md:w-fit mx-auto">
        <Title />
        <Main />
      </div>
    </main>
  )
}

function Main() {
  const [config, setConfig] = useState<Config>({
    bill: 0,
    tip: 0,
    people: 0,
  })

  return (
    <div className="bg-white rounded-t-3xl md:flex md:items-center md:rounded-2xl md:shadow-xl md:drop-shadow-xl">
      <MainInput config={config} setConfig={setConfig} />
      <Result config={config} setConfig={setConfig} />
    </div>
  )
}

function Result({
  config,
  setConfig,
}: {
  config: Config
  setConfig: (config: Config) => void
}) {
  return (
    <div className="p-6 md:pl-0">
      <div className="flex flex-col justify-between bg-[#003E41] rounded-2xl p-6 gap-4 md:h-[350px] md:w-[280px] lg:w-[350px]">
        <Card
          label="Tip Amount"
          value={
            config.people
              ? (config.bill * (config.tip / 100)) / config.people
              : 0.0
          }
        />
        <Card
          label="Total"
          value={
            config.people
              ? (config.bill * (1 + config.tip / 100)) / config.people
              : 0.0
          }
        />
        <div className="flex"></div>
        <button
          onClick={() => setConfig({ bill: 0, tip: 0, people: 0 })}
          className="bg-[#00BAA4] text-[#003E41] hover:bg-[#89E4DA] font-bold text-xl rounded-md p-2"
        >
          RESET
        </button>
      </div>
    </div>
  )
}

function Card({ value, label }: { value: number; label: string }) {
  const val = value.toFixed(2)
  return (
    <div className="flex justify-between items-center py-2 gap-2">
      <div>
        <div className="text-white">{label}</div>
        <div className="text-white/40 text-sm">/ person</div>
      </div>
      <div className="text-[#00BAA4] text-3xl font-bold">${val}</div>
    </div>
  )
}

function MainInput({
  config,
  setConfig,
}: {
  config: Config
  setConfig: (config: Config) => void
}) {
  return (
    <div className="bg-white p-6 rounded-t-3xl md:rounded-2xl gap-3 flex flex-col">
      <Input
        label="Bill"
        value={config.bill}
        min={0}
        onChange={(value) => setConfig({ ...config, bill: value })}
        icon={<Image src={IconDollar} alt="" />}
      />
      <TipInput
        value={config.tip}
        onChange={(value) => setConfig({ ...config, tip: value })}
      />
      <Input
        label="Number of People"
        value={config.people}
        min={0}
        onChange={(value) => setConfig({ ...config, people: value })}
        icon={<Image src={IconPerson} alt="" />}
      />
    </div>
  )
}

function Input({
  label,
  value,
  onChange,
  icon,
  placeholder,
  align = 'right',
  ...rest
}: {
  label?: string
  value?: number
  onChange: (value: number) => void
  icon?: ReactElement
  align?: 'left' | 'right' | 'center'
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-[#003E41]/80 font-bold py-1" htmlFor={label}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={label}
          type="number"
          className={`w-full py-2 px-4 rounded-md text-[#003E41] font-bold text-2xl bg-[#F0F7FA] outline-[#449F95] min-w-[120px]
            text-${align} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
          value={value !== undefined ? value : ''}
          placeholder={placeholder ?? '0'}
          onChange={(event) => onChange(Number(event.target.value))}
          {...rest}
        />
        {icon && (
          <div className="absolute top-1/2 -translate-y-1/2 p-4">{icon}</div>
        )}
      </div>
    </div>
  )
}

function TipInput({
  value,
  onChange,
}: {
  value: number
  onChange: (value: number) => void
}) {
  const predefinedTips = [5, 10, 15, 25, 50]
  const [customTip, setCustomTip] = useState(false)

  return (
    <div className="flex flex-col">
      <label className="text-[#003E41]/80 font-bold py-1">Select Tip %</label>
      <div className="grid  grid-cols-2 sm:grid-cols-3 gap-5">
        {predefinedTips.map((tip) => (
          <TipButton
            key={tip}
            value={tip}
            selected={value === tip}
            onClick={() => {
              setCustomTip(false)
              onChange(tip)
            }}
          />
        ))}
        <Input
          value={customTip ? value : undefined}
          onChange={(val) => {
            setCustomTip(true)
            onChange(Math.max(0, Math.min(100, val)))
          }}
          type="number"
          placeholder="Custom"
          align="center"
          pattern="[0-9]*"
          min={0}
          max={100}
          step={1}
        />
      </div>
    </div>
  )
}

function TipButton({
  value,
  selected,
  onClick,
}: {
  value: number
  selected: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`w-full ${
        selected ? 'bg-[#00BAA4] text-[#003E41]' : 'bg-[#00494D] text-white/90'
      } hover:bg-[#89E4DA]  hover:text-[#003E41] rounded-md font-bold text-2xl p-[0.5rem]`}
      onClick={onClick}
    >
      {value}%
    </button>
  )
}

function Title() {
  return (
    <div className="p-11">
      <Image src={Logo} alt="Logo" className="mx-auto" />
    </div>
  )
}
