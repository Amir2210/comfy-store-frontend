import { useSelector } from 'react-redux';
import { Navbar } from '../cmps/Navbar';

export function Cart() {
  const user = useSelector((storeState) => storeState.userModule.loggedInUser)
  return (
    <>
      <Navbar user={user} />
      <h1>im cart page</h1>
    </>
  )
}