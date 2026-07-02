import { useRef } from "react"
export default function UseRefExample1() {
    const inputRef = useRef()
    const paraRef = useRef()
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(inputRef.current.value)
        inputRef.current.value = "Hello Shato! Welcome Home!"
        paraRef.current.innerText = "Helluuuuuu"
        paraRef.current.style.color = "red"
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control mb-2" ref={inputRef} />
                <button type="submit" className="btn btn-primary">Submit</button>
                <p ref={paraRef} onClick={() => inputRef.current.focus()}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus commodi atque harum temporibus debitis quaerat tenetur odit praesentium maiores et molestiae, doloribus repellat laudantium iure at consequatur. Repudiandae, a saepe.
                    Reiciendis architecto nesciunt consectetur delectus modi quos ea et, molestiae suscipit veritatis quo distinctio doloribus cum, cupiditate rem? Dolorum dicta sint quo expedita suscipit aliquid autem officiis qui consectetur ipsa.
                    Maxime dignissimos harum laboriosam repellendus, fugiat eaque explicabo placeat eveniet reiciendis suscipit perferendis porro sed expedita rerum sunt deleniti quia itaque nostrum obcaecati deserunt architecto maiores? Nam amet enim aperiam.
                </p>

            </form>
        </div>
    )
}