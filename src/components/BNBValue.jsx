import BNBIcon from './BNBIcon'

const formatValue = (value, options = {}) => {
  if (value === undefined || value === null || value === '') return '0'
  const num = typeof value === 'number' ? value : parseFloat(value)
  if (Number.isNaN(num)) return value
  const { minimumFractionDigits = 0, maximumFractionDigits = 2 } = options
  return num.toLocaleString(undefined, { minimumFractionDigits, maximumFractionDigits })
}

const BNBValue = ({ value, iconSize = 14, className = '', formatOptions }) => {
  return (
    <span className={`bnb-value ${className}`.trim()}>
      <BNBIcon size={iconSize} className="bnb-value__icon" />
      <span className="bnb-value__amount">{formatValue(value, formatOptions)}</span>
    </span>
  )
}

export default BNBValue
