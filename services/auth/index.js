import { http } from "../config";
import VueJwtDecode from "vue-jwt-decode";

export default {
  login: (youEmail, youPass) => {
    http
      .post(
        "/usuarios/login",
        {
          email: youEmail,
          senha: youPass,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        let decode = VueJwtDecode.decode(token);

        if (decode.id_status == 3 && decode.id_nivel == 2) {
          window.location.href = "/#/dashboard-client-perfil";
        }
        if (decode.id_status == 1 && decode.id_nivel== 2) {
          window.location.href = "/#/dashboard-client";
        }
        if (decode.id_status == 1 && decode.id_nivel == 1) {
          window.location.href = "/#/dashboard-admin";
        }
        if (decode.id_status == 3 && decode.id_nivel == 3) {
          window.location.href = "/#/dashboard-entregador-perfil";
        }
        if (decode.id_status == 1 && decode.id_nivel == 3) {
          window.location.href = "/#/dashboard-entregador";
        }
      })
      .catch((error) => {
        console.log("Error ========>", error);
      });
  },

  statusUser: (youStatus, youId) => {
    http
      .patch(
        "/usuarios/edit_status_empresa/",
        {
          id_users: youId,
          status: youStatus,   
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        window.location.href = "/dashboard-client";
      })
      .catch((error) => {
        console.log("Error ========>", error);
      });
  },

  cadastro: (youNome, youSobrenome, youEmail, youPass, youNivel) => {
    http
      .post(
        "/usuarios/cadastro/",
        {
          nome: youNome,
          sobrenome: youSobrenome,
          email: youEmail,
          senha: youPass,
          status: 3,
          nivel: youNivel,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        window.location.href = "/";
      })
      .catch((error) => {
        console.log("Error ========>", error);
      });
  },

  empresa: (
    youId,
    youRazao,
    youEndereco,
    youCep,
    youTelefone1,
    youTelefone2,
    youSegmento,
    youCnpj,
    youWebsite
  ) => {
    http
      .post(
        "/perfil/empresa/",
        {
          razao: youRazao,
          id_user: youId,
          endereco: youEndereco,
          cep: youCep,
          telefone1: youTelefone1,
          telefone2: youTelefone2,
          cnpj: youCnpj,
          id_segmento: youSegmento,
          site: youWebsite,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        window.location.href = "/#/dashboard-client";
      })
      .catch((error) => {
        console.log("Error ========>", error);
      });
  },

  entregador: (
    youId,
    youEndereco,
    youCep,
    youTelefone1,
    youTelefone2,
    youCnh,
    youCpf,
    youMarca,
    youModelo,
    youAno,
  ) => {
    http
      .post(
        "/perfil/entregador/",
        {
          endereco: youEndereco,
          cep: youCep,
          telefone1: youTelefone1,
          telefone2: youTelefone2,
          cnh: youCnh,
          cpf: youCpf,
          id_user: youId,
          marca_moto: youMarca,
          modelo_moto: youModelo,
          ano_moto: youAno,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        window.location.href = "/#/dashboard-entregador";
      })
      .catch((error) => {
        console.log("Error ========>", error);
      });
  },

  list: () => {
    return http.get("/segmento/", {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
      })   
  },
};
