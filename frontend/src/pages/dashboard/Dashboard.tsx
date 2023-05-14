import React from "react";
import styles from "./Dashboard.module.css";
import { Navigate } from "react-router-dom";
import { Session } from "../../model/utils/Session";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { CountResponse } from "../../model/interfaces/UserResponse";
import UserService from "../../services/UserService/UserService";
import MainHeader from "../../components/MainHeader/MainHeader";

Chart.register(CategoryScale);
Chart.defaults.font.size = 16;

class Dashboard extends React.Component<any, any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            chartData: undefined,
            options: undefined
        };
    }

    componentDidMount(): void {
        this.getUserByActive();
    }

    private async getUserByActive() {
        const activeResponse: CountResponse = await UserService.getUserByActive(true);
        const inactiveResponse: CountResponse = await UserService.getUserByActive(false);

        const quantidadeDeUsuarioAtivos = activeResponse.data;
        const quantidadeDeUsuarioInativos = inactiveResponse.data;

        const options = {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    color: "#333",
                    text: "Usuários Ativos x Inativos"
                },
                legend: {
                    display: false,
                    labels: { font: { size: 12 } },
                },
            },
            scales: {
                x: {
                    min: 0,
                    grid: { color: "white", drawOnChartArea: false },
                    ticks: { color: "#2F4F4F", lineWidth: 2 },
                },
                y: {
                    min: 0,
                    grid: { color: "white", drawOnChartArea: false },
                    ticks: { color: "#2F4F4F", lineWidth: 2 },
                },
            },
        };

        const chartData = {
            labels: [ "Ativos", "Inativos" ],
            datasets: [
                {
                    label: "Usuários",
                    data: [ quantidadeDeUsuarioAtivos, quantidadeDeUsuarioInativos ],
                    backgroundColor: [ "#060047", "#F36E29" ],
                    borderColor: "white",
                    borderWidth: 2,
                },
            ],
        };

        this.setState(() => ({
            chartData: chartData,
            options: options,
        }));
    }

    render() {
        const session = Session();

        if (session.profile.type === 1) {
            return (
                <div className={ styles.content }>
                    <MainHeader title="Dashboard" area="Navegação" pages={[ "Dashboard" ]} />
                    <div className={ styles.container }>
                        { this.state.chartData && (
                            <Bar className={ styles.chart } data={ this.state.chartData } options={ this.state.options } />
                        )}
                    </div>
                </div>
            );
        } else {
            return <Navigate to="/initialuser" />;
        }
    }
}

export default Dashboard;
