// render data for prices on index.html
let map = new Map();

let prices = [
    {
        id: 'msc',
        title: 'Московский НПЗ',
        price: '0',
        diff: '0',
        code: 'A592YAI060F',
    },
    {
        id: 'rzs',
        title: 'Рязанская НПК',
        price: '0',
        diff: '0',
        code: 'A592STI060F',
    },
    {
        id: 'luc',
        title: 'ЛУКОЙЛ-ННОС',
        price: '0',
        diff: '0',
        code: 'A592ZEL060F',
    },
];

(function () {
let timerId = null, position = 0, idx = 0;

if (timerId == null) {
  initPrices();
}

const rotator = () => {
  idx++;
  position = -18;
  changeRotatorPosition(position);

  if (idx === 1) {
    idx = 0;
    position = 0;
    setTimeout(() => {
      changeRotatorPosition(position);
    }, 2000);
  }

  timerId = setTimeout(rotator, 3000);
};

rotator();
})();

function changeRotatorPosition(position) {
const nodeSlider = document.querySelectorAll(".item-carousel");

if (nodeSlider != null) {
  nodeSlider[0].style.cssText = `transform: translateY(${position}px);transition: transform 1.0s ease`;
  nodeSlider[1].style.cssText = `transform: translateY(${position}px);transition: transform 1.0s ease`;
  nodeSlider[2].style.cssText = `transform: translateY(${position}px);transition: transform 1.0s ease`;
}
}

//STOCK CONNECTION SECTION START
////////////////////////////////
//connection to signalR web socket
// const connection = new signalR.HubConnectionBuilder()
//     .withUrl("https://api.commod.ru/sharedmarketsignal/sharedspotsignal", {
//         transport: signalR.HttpTransportType.WebSockets,
//     })
//     .withHubProtocol(new signalR.protocols.msgpack.MessagePackHubProtocol())
//     .withAutomaticReconnect([0, 10000, 15000, 30000])
//     .build();

// async function start() {
//     try {
//         await connection.start();
//         console.log("SignalR Connected successfully");
//     } catch (err) {
//         console.log(err);
//         setTimeout(start, 5000);
//     }
// }

function callSocketStreams() {
    //call QuotesOnConnected - это котировки
    connection.on("QuotesOnConnected", (data) => {
        if (data && data.length > 0) {
            console.log("xxx_all", data);
            let changed = false;
            for (var i = 0; i < data.length; i++) {
                if (data[i].code == "A592YAI060F") {
                    console.log("xxx_A592YAI060F", data[i]);
                    map.set(data[i].code, data[i]);
                    changed = true;
                }
                if (data[i].code == "A592STI060F") {
                    console.log("xxx_A592STI060F", data[i]);
                    map.set(data[i].code, data[i]);
                    changed = true;
                }
                if (data[i].code == "A592ZEL060F") {
                    console.log("xxx_A592ZEL060F", data[i]);
                    map.set(data[i].code, data[i]);
                    changed = true;
                }
            }

            if (changed) {
                for (var i = 0; i < prices.length; i++) {

                    let data = map.get(prices[i].code);
                    if (data) {
                        prices[i].price = data.ltprice;
                        prices[i].diff = data.delta;
                    }
                }
                initPrices();
            }

        } else {
            console.log("Котировки не заполнены!");
        }
    });
    //call lhMessage - это исторический график
    connection.on("lhMessage", (data) => {
        console.log("Socket historical data!");
    });
    //call StockTimeOnConnected - это время биржи
    connection.on("StockTime", (data) => {
        console.log("Socket StockTime!");
    });
}

// $(async () => {
//     try {
//         console.log("xxx");
//         await start();
//         callSocketStreams();
//     } catch (error) {
//         console.log(error);
//     }
// });

//////////////////////////////
//STOCK CONNECTION SECTION END

function initPrices() {
//const prices = [
//  {
//    id: 'msc',
//    title: 'Московский НПЗ',
//    price: '38600',
//    diff: '-0.94',
//  },
//  {
//    id: 'rzs',
//    title: 'Рязанская НПК',
//    price: '38600',
//    diff: '-0.94',
//  },
//  {
//    id: 'luc',
//    title: 'ЛУКОЙЛ-ННОС',
//    price: '41211',
//    diff: '0.62',
//  },
//];

for (let data of prices) {
  if (data.id === 'msc') {
    const mscTitle = document.querySelector(
      '.prices-item-first > .item-content > .item-content__title'
    );
    const mscPrice = document.querySelector(
      '.prices-item-first > .item-content > .item-slider > .item-carousel > .item-carousel-price > .value'
    );
    const mscDiff = document.querySelector(
      '.prices-item-first > .item-content > .item-slider > .item-carousel > .item-carousel-diff > .value'
    );
    const mscCurr = document.querySelector(
      '.prices-item-first > .item-content > .item-slider > .item-carousel > .item-carousel-diff > .curr'
    );
    const mscPrice1 = document.querySelector(
      '.prices-item-first > .item-content > .item-slider > .item-carousel > .item-carousel__price1'
    );
    if (mscTitle != null) {
      mscTitle.textContent = data.title;
    }
    if (mscPrice != null) {
      mscPrice.textContent = data.price;
    }
    if (mscDiff != null) {
      mscDiff.textContent = data.diff;
      if ((/-/).test(data.diff)) {
        mscDiff.classList.add("neg");
      }
    }
    if (mscCurr != null) {
      if ((/-/).test(data.diff)) {
        mscCurr.classList.add("neg");
      }
    }
    if (mscPrice1 != null) {
      mscPrice1.textContent = data.price;
    }
  }
  if (data.id === 'rzs') {
    const rzsTitle = document.querySelector(
      '.prices-item-second > .item-content > .item-content__title'
    );
    const rzcPrice = document.querySelector(
      '.prices-item-second > .item-content > .item-slider > .item-carousel > .item-carousel-price > .value'
    );
    const rzsDiff = document.querySelector(
      '.prices-item-second > .item-content > .item-slider > .item-carousel > .item-carousel-diff > .value'
    );
    const rzcCurr = document.querySelector(
      '.prices-item-second > .item-content > .item-slider > .item-carousel > .item-carousel-diff > .curr'
    );
    const rzsPrice1 = document.querySelector(
      '.prices-item-second > .item-content > .item-slider > .item-carousel > .item-carousel__price1'
    );
    if (rzsTitle != null) {
      rzsTitle.textContent = data.title;
    }
    if (rzcPrice != null) {
      rzcPrice.textContent = data.price;
    }
    if (rzsDiff != null) {
      rzsDiff.textContent = data.diff;
      if ((/-/).test(data.diff)) {
        rzsDiff.classList.add("neg");
      }
    }
    if (rzcCurr != null) {
      if ((/-/).test(data.diff)) {
        rzcCurr.classList.add("neg");
      }
    }
    if (rzsPrice1 != null) {
      rzsPrice1.textContent = data.price;
    }
  }
  if (data.id === 'luc') {
    const lucTitle = document.querySelector(
      '.prices-item-third > .item-content > .item-content__title'
    );
    const lucPrice = document.querySelector(
      '.prices-item-third > .item-content > .item-slider > .item-carousel > .item-carousel-price > .value'
    );
    const lucDiff = document.querySelector(
      '.prices-item-third > .item-content > .item-slider > .item-carousel > .item-carousel-diff > .value'
    );
    const lucCurr = document.querySelector(
      '.prices-item-third > .item-content > .item-slider > .item-carousel > .item-carousel-diff > .curr'
    );
    const lucPrice1 = document.querySelector(
      '.prices-item-third > .item-content > .item-slider > .item-carousel > .item-carousel__price1'
    );
    if (lucTitle != null) {
      lucTitle.textContent = data.title;
    }
    if (lucPrice != null) {
      lucPrice.textContent = data.price;
    }
    if (lucDiff != null) {
      lucDiff.textContent = data.diff;

      if ((/-/).test(data.diff)) {
        lucDiff.classList.add("neg");
      }
    }
    if (lucCurr != null) {
      if ((/-/).test(data.diff)) {
        lucCurr.classList.add("neg");
      }
    }
    if (lucPrice1 != null) {
      lucPrice1.textContent = data.price;
    }
  }
}
}

