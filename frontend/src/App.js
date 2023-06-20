import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from "react-admin";
import simpleRestProvider from 'ra-data-simple-rest'

const App = () => (
  <Admin dataProvider={simpleRestProvider('http://localhost:8080/')}>
    <Resource name="realisasibas" list={ListGuesser} />
  </Admin>
)

export default App;