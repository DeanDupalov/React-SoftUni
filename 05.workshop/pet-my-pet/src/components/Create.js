import { useEffect, useState } from "react"

function Create() {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/types')
            .then(res => res.json())
            .then(res => {
                setTypes(Object.values(res));
            })
    })

    return (
        <section id="create-page" className="create">
            <form id="create-form" action="" method="">
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="category">CATEGORY</label>
                        <span className="input">
                            <select id="category" name="category">
                                {types.map(x =><option key={x._id}  value={x.name}>{x.name}</option>)}
                            </select>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                {types.map(x =><option key={x._id}  value={x.name}>{x.name}</option>)}
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Pet" />
                </fieldset>
            </form>
        </section>
    )
}

export default Create;