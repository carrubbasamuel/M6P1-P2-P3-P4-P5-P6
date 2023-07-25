import { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchRegister } from "../../redux/reducers/LoginSlice";
import "./register.css";

export default function Register() {
    const dispatch = useDispatch();
    const  navigate  = useNavigate();

    const mail = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const surname = useRef(null);
    const born_date = useRef(null);
    const avatar = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(avatar.current.value === "") avatar.current.value = "https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
        const formData = {
            email: mail.current.value,
            password: password.current.value,
            name: name.current.value,
            surname: surname.current.value,
            born_date: born_date.current.value,
            avatar: avatar.current.value
        }
        
        dispatch(fetchRegister(formData));
        navigate("/")
    }

    return (
        <div className="register-container">
        <Form className="register-form" onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={mail} name="email" type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={password} name="password" type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control ref={name} name="name" type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="formSurname">
            <Form.Label>Surname</Form.Label>
            <Form.Control ref={surname} name="surname" type="text" placeholder="Surname" />
          </Form.Group>
          <Form.Group controlId="formBornDate">
            <Form.Label>Born Date</Form.Label>
            <Form.Control ref={born_date} name="born_date" type="date" placeholder="Born Date" />
          </Form.Group>
          <Form.Group controlId="formAvatar">
            <Form.Label>Avatar</Form.Label>
            <Form.Control ref={avatar} name="avatar" type="input" placeholder="http://img...." />
          </Form.Group>
          <Button type="submit" variant="outline-success">
            Submit
          </Button>
        </Form>
      </div>
    )
}