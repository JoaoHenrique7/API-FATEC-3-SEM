import React from "react";
import styles from "./Dashboard.module.css";
import Navbar from "../../modules/Navbar/Navbar";
import { Navigate } from "react-router-dom";
import { Session } from "../../model/utils/Session";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import UserResponse, {
  CountResponse,
} from "../../model/interfaces/UserResponse";
import UserService from "../../services/UserService/UserService";

Chart.register(CategoryScale);
Chart.defaults.font.size = 20;

class Dashboard extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      chartData: undefined,
      options: undefined,
    };
  }

  componentDidMount(): void {
    this.getUserByActive();
  }

  private async getUserByActive() {
    const activeResponse: CountResponse = await UserService.getUserByActive(
      true
    );
    const inactiveResponse: CountResponse = await UserService.getUserByActive(
      false
    );

    const quantidadeDeUsuarioAtivos = activeResponse.data;
    const quantidadeDeUsuarioInativos = inactiveResponse.data;

    console.log(quantidadeDeUsuarioAtivos);

    const options = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          color: "white",
          text: "Usuários Ativos x Inativos",
        },
        legend: {
          display: false,
          labels: {
            font: {
              size: 15,
            },
          },
        },
      },
      scales: {
        x: {
          min: 0,
         // max: 5,
          grid: {
            color: "white",
            drawOnChartArea: false,
          },
          ticks: {
            color: "#2F4F4F",
            lineWidth: 2,
          },
        },
        y: {
          min: 0,
          //max: 5,
          grid: {
            color: "white",
            drawOnChartArea: false,
          },
          ticks: {
            color: "#2F4F4F",
            lineWidth: 2,
          },
        },
      },
    };

    const chartData = {
      labels: ["Ativos", "Inativos"],
      datasets: [
        {
          label: "Usuários", 
          data: [quantidadeDeUsuarioAtivos, quantidadeDeUsuarioInativos],
          backgroundColor: ["#DC143C", "#8A2BE2"],
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
    const breadcrumbList = [
      { name: "Navegação" },
      { name: "Dashboard" },
    ];
    const session = Session();
    if (session.profile.type === 1) {
      return (
        <div className={styles.content}>
          <div className={styles.titleContainer}>
            <Navbar pathList={breadcrumbList} />
            <h1>Dashboard</h1>
          </div>
          <div className={styles.container}>
            {this.state.chartData && (
              <Bar data={this.state.chartData} options={this.state.options} />
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
