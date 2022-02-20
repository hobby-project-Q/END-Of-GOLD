import MainLayout from "../component/Layout/MainLayout";
import RuleSection from "../component/section/RuleSection";
import UniversalRuleSection from "../component/section/UniversalRuleSection";

function Main(){
    return (
        <MainLayout>
            <RuleSection />
            <UniversalRuleSection />
        </MainLayout>
    )
}

export default Main;