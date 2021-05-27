import './App.css';
import TopNavbar from './TopNavbar';
import LandingHero from './LandingHero';

function App() {
  return (
    <div className='landing-body' style={{ 'height': '100vh', 'width': '100vw' }}> 
      <TopNavbar />
      <LandingHero />
    </div>
    // <Columns breakpoint='mobile' display='flex' alignItems='stretch' centered vCentered marginless>
    //   <Columns.Column display='flex' alignItems='center' size={6}>
    //     <Heading weight='bold' size={4}>
    //       EZ-Grocery
    //     </Heading>
    //   </Columns.Column>
    //   <Columns.Column display='flex' alignItems='center' size={3}>
        // <Button color='link'>
        //   Login
        // </Button>
    //   </Columns.Column>
    //   <Columns.Column display='flex' alignItems='center' size={3}>
        // <Icon size='large'>
    //       <img src={logo} alt='hamburger menu'/>
    //     </Icon>
    //   </Columns.Column>
    // </Columns>
  )
}

export default App;
