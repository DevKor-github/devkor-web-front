import ServiceContainer from "@/containers/ServiceContainer";
import ServiceData from "@/utils/service_data";

export function ServiceBox() {
    return (
        <div>
            {ServiceData.map((a, i) => {
                return (
                    <ServiceContainer
                        key={i}
                        img={a[0]}
                        serviceName={a[1]}
                        content={a[2]}
                        serviceURL={a[3]}
                        githubURL={a[4]}
                    />
                );
            })}
        </div>
    );
}
