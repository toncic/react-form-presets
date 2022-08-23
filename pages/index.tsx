import type { NextPage } from 'next'
import OutlinedInputField from '../components/input/OutlinedInputFiled'
import styles from '../styles/Home.module.css'
import Presets from '../components/input/presets'
import { ChangeEvent, useState } from 'react'

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apartmentNumber, setAparmentNumber] = useState();

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const onApartmentNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAparmentNumber(event.target.value)
  }

  return (
    <div className={styles.container}>
      <OutlinedInputField
        preset={Presets.Email(
          "email",
          false,
        )}
        onChange={onEmailChange}
        value={email}
      />
      <OutlinedInputField
        preset={Presets.Password(
          "password",
          true
        )}
        onChange={onPasswordChange}
        value={password}
      />
      <OutlinedInputField
        preset={Presets.Integer(
          "apartment_number",
          true,
          "Aparment number",
          "Please make sure that apartment number is correct!",
          "Aparment number can't be empty!",
          0,
          1000
        )}
        onChange={onApartmentNumberChange}
        value={apartmentNumber}
      />
    </div>
  )
}

export default Home
