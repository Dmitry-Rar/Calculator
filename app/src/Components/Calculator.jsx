import "../Styles/Calculator_Style.css"

function Calculator() {
    let operand_left = undefined
    let operator = undefined
    let operand_right = undefined
    let one = 1
    let two = 2
    let three = 3
    let four = 4
    let five = 5
    let six = 6
    let seven = 7
    let eight = 8
    let nine = 9
    let zero = 0
    let plus = '+'
    let minus = '-'
    let multiplication = '*'
    let division = ':'

    return (
        <>
            <section className="calculator-section">
                <section className="calculator-screen-section">
                    {operand_left}
                    {operator}
                    {operand_right}
                </section>
                <section className="buttons-section">
                    <button name={one}>{one}</button>
                    <button name={two}>{two}</button>
                    <button name={three}>{three}</button>
                    <button name={four}>{four}</button>
                    <button name={five}>{five}</button>
                    <button name={six}>{six}</button>
                    <button name={seven}>{seven}</button>
                    <button name={eight}>{eight}</button>
                    <button name={nine}>{nine}</button>
                    <button name={zero}>{zero}</button>
                    <button name={plus}>{plus}</button>
                    <button name={minus}>{minus}</button>
                    <button name={multiplication}>{multiplication}</button>
                    <button name={division}>{division}</button>
                </section>
                <script>
                </script>
            </section>
        </>
    )
}

export default Calculator