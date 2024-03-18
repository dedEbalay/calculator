import Button from "../Button/Button";
import WorkWindow from "../WorkWindow/WorkWindow";

export default function Wrapper() {

    const arrOfValues:string[] = ['AC', '+/-', '%', '÷', '1', '2', '3', 'X', '4', '5', '6', '-', '7', '8', '9', '+', '0', '.', '=']

    return (
        <div className="container">
            <WorkWindow />
            <div className="calculator-container">
            {
                arrOfValues.map((item: string) => {
                    return (
                        <Button name={item} key={item} />
                    )
                })
            }
            </div>
        </div>
    )
}