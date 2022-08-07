import SelectionCard from "./SelectionCard"

const SelectionCards = ({ selectionCards, onDelete, onToggle }) => {
  return (
    <>
      {selectionCards.map((selectionCard, index) => (
        <SelectionCard key={index} selectionCard={selectionCard} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  )
}

export default SelectionCards