import Particles from "@/Components/Animations/Particles.jsx";

export const dynamic = "force-dynamic";

function NotFound() {
   return (
      <div className="not-found">
         {/*<Aurora
            colorStops={["#0070e0", "#9900ff", "#0095ff"]}
            blend={0.5}
            amplitude={0.5}
            speed={1.0}
         />*/}
         <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
            <Particles
               particleColors={['#0095ff', '#0095ff']}
               particleCount={200}
               particleSpread={10}
               speed={0.1}
               particleBaseSize={100}
               moveParticlesOnHover={true}
               alphaParticles={false}
               disableRotation={false}
            />
         </div>
         <div className="not-found-content">
            <h1>404</h1>
            <p>Упс! Похоже этой страницы, пока не существует...</p>
         </div>
      </div>
   );
}

export default NotFound;