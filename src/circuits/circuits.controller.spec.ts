import { Test, TestingModule } from "@nestjs/testing";
import { CircuitsController } from "./circuits.controller";
import { CircuitsService } from "./circuits.service";

describe("AppController", () => {
  let appController: CircuitsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CircuitsController],
      providers: [CircuitsService],
    }).compile();

    appController = app.get<CircuitsController>(CircuitsController);
  });

  describe("root", () => {
    it("should return all circuits", () => {
      expect(appController.getCircuits()).toStrictEqual([
        {
          name: "Abu Dhabi GP",
          description: "Yas Marina Circuit",
          flag: "are",
        },
        {
          name: "Australian GP",
          description: "Melbourne",
          flag: "au",
        },
        {
          name: "Austrian GP",
          description: "Red Bull Ring, Spielberg",
          flag: "aut",
        },
        {
          name: "Azerbaijan GP",
          description: "Baku City Circuit",
          flag: "aze",
        },
        {
          name: "Bahrain GP",
          description: "Bahrein, Sakhir",
          flag: "bhr",
        },
        {
          name: "Belgian GP",
          description: "Spa-Francorchamps",
          flag: "bel",
        },
        {
          name: "Brazilian GP",
          description: "Interlagos, São Paulo",
          flag: "bra",
        },
        {
          name: "British GP",
          description: "Circuit Silverstone",
          flag: "gbr",
        },
        {
          name: "Canadian GP",
          description: "Gilles Villeneuve",
          flag: "can",
        },
        {
          name: "Chinese GP",
          description: "Shanghai",
          flag: "chi",
        },
        {
          name: "Dutch GP",
          description: "Circuit Zandvoort",
          flag: "nld",
        },
        {
          name: "Emilia Romagna GP",
          description: "Imola",
          flag: "ita",
        },
        {
          name: "French GP",
          description: "Circuit Paul Ricard, Le Castellet",
          flag: "fra",
        },
        {
          name: "Hungarian GP",
          description: "Hungaroring, Budapest",
          flag: "hun",
        },
        {
          name: "Italian GP",
          description: "Monza",
          flag: "ita",
        },
        {
          name: "Japanese GP",
          description: "Suzuka Circuit",
          flag: "jap",
        },
        {
          name: "Mexican GP",
          description: "Autodromo Hermanos Rodriguez",
          flag: "mex",
        },
        {
          name: "Miami GP",
          description: "Miami International Autodrome",
          flag: "usa",
        },
        {
          name: "Monaco GP",
          description: "Monte Carlo",
          flag: "mco",
        },
        {
          name: "Portuguese GP",
          description: "Portimão",
          flag: "por",
        },
        {
          name: "Russian GP",
          description: "Sochi Autodrom",
          flag: "rus",
        },
        {
          name: "Saudi Arabian GP",
          description: "Jeddah Street Circuit",
          flag: "sau",
        },
        {
          name: "Singapore GP",
          description: "Marina Bay Street Circuit",
          flag: "sgp",
        },
        {
          name: "Spanish GP",
          description: "Barcelona",
          flag: "esp",
        },
        {
          name: "United States GP",
          description: "Austin, Texas",
          flag: "usa",
        },
      ]);
    });
  });
});
