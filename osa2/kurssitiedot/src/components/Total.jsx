const Total = ({course}) => {
  const data = course.parts
  const count = data.map((item) => item.exercises)
  const sum = count.reduce((curval,acc) => acc + curval,0)

  return (
    <strong><p>Total of {sum} exercises </p></strong>
  )
}
export default Total