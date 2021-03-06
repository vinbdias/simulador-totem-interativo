"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PerfisDataSource = function () {
    function PerfisDataSource() {
        _classCallCheck(this, PerfisDataSource);
    }

    _createClass(PerfisDataSource, null, [{
        key: "getPerfis",
        value: function getPerfis() {

            return [{

                "indice": 90,
                "nomePerfil": "Consumidor Consciente",
                "textoPerfil": "Parabéns! Suas escolhas e hábitos financeiros são conscientes e adequados à sua rotina.",
                "imagemPerfil": "consumidor_02.png"
            }, {

                "indice": 60,
                "nomePerfil": "Consumidor Moderado",
                "textoPerfil": "Você tem consciência de suas ações! Continue com o saldo positivo e os gastos sob controle.",
                "imagemPerfil": "consumidor_03.png"
            }, {

                "indice": 30,
                "nomePerfil": "Consumidor Imprudente",
                "textoPerfil": "Atenção, revise seus gastos e ações! Veja se estão compatíveis com sua renda e mude alguns hábitos.",
                "imagemPerfil": "consumidor_01.png"
            }];
        }
    }]);

    return PerfisDataSource;
}();
//# sourceMappingURL=PerfisDataSource.js.map