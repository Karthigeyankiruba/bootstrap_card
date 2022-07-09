
import './App.css';
import Card from './Card';

function App() {

  const cards = [
    {
      title: "Free",
      price: 0,
      features: [
        {
          name: "Single User",
          isEnabled: true
        },
        {
          name: "5GB Storage",
          isEnabled: true
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true
        },
        {
          name: "Community Access",
          isEnabled: true
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: false
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: false
        },
        {
          name: "Free Subdomain",
          isEnabled: false
        },
        {
          name: "Monthly Status Reports",
          isEnabled: false
        },
      ]
    },
    {
      title: "PLUS",
      price: 9,
      features: [
        {
          name: "5 Users",
          isEnabled: true
        },
        {
          name: "50GB Storage",
          isEnabled: true
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true
        },
        {
          name: "Community Access",
          isEnabled: true
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: true
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: true
        },
        {
          name: "Free Subdomain",
          isEnabled: true
        },
        {
          name: "Monthly Status Reports",
          isEnabled: false
        },
      ]
    },
    {
      title: "PRO",
      price: 49,
      features: [
        {
          name: "Unlimited Users",
          isEnabled: true
        },
        {
          name: "150GB Storage",
          isEnabled: true
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true
        },
        {
          name: "Community Access",
          isEnabled: true
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: true
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: true
        },
        {
          name: "Unlimited Free Subdomains",
          isEnabled: true
        },
        {
          name: "Monthly Status Reports",
          isEnabled: true
        },
      ]
    },
  ]
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {
            cards.map((card) => {
              return <Card data={card} />
            })
          }
        </div>
      </div>
    </section>
  );
}


export default App;
