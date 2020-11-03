const path = require("path");
const glob = require("glob");
const fs = require("fs-extra");
const os = require("os");

const stripe = require("stripe")(process.env.STRIPE_KEY);

/**
 * Hooks! 
 * 
 * Lifecycle hooks are the backbone of how you can have complete control over the output of your site.
 * Hooks are enforced via the hookInterface 'contract' defined here: 
        https://github.com/Elderjs/elderjs/blob/master/src/hookInterface/hookInterface.ts
 *
 * If you read the hookInterface spec closely you'll see that each defined hook gets specific 'props' along with which of those props is 'mutable'.
 * 
 * If you're a fan of 'pure' functions in JS, mutating props will probably set off alarm bells in your head. Fear not, instead of burying 
 * what is mutating things deep in your application, you'll know it is probably in this file.
 *
 * Also, to help keep mutation predictable each 'hook' limits which 'props' can be manipulated and where. 
 * 
 */

/*
  Hook purposes:
    bootstrap: Share data to all routes
    data: Pass data to template routes (passes data to all slugs of that template)
*/

const hooks = [
  {
    hook: "bootstrap",
    name: "addProductsToData",
    description: "Hook that makes product data available on all routes.",
    priority: 50,
    run: async ({ data }) => {
      // // Get the products
      // var { data: products } = await stripe.products.list();
      // products = products.map(
      //   ({
      //     name,
      //     description,
      //     id,
      //     metadata: { type, roaster, origin, decaf, notes, color },
      //   }) => {
      //     return {
      //       name,
      //       description,
      //       id,
      //       type,
      //       roaster,
      //       origin,
      //       decaf,
      //       notes,
      //       color,
      //       prices: {},
      //     };
      //   }
      // );

      // // Get and add prices to products
      // const { data: prices } = await stripe.prices.list({ limit: 100 });
      // prices.forEach(({ product, nickname, unit_amount }) => {
      //   prodIndex = products.findIndex(({ id }) => id == product);
      //   if (prodIndex != -1) {
      //     products[prodIndex].prices[nickname] = unit_amount;
      //   }
      // });

      /* 
      // Products API obj example: https://stripe.com/docs/api/products/list?lang=node 
      // after processing:
      // [
      //  {
            name: 'tucan-mexico-paraiso_mexicano',
            id: 'prod_IJXaa5F9JfnzXJ',
            type: 'Paraiso Mexicano',
            roaster: 'Tucan',
            origin: 'Mexico',
            decaf: 'No',
            notes: 'Cocoa, Cane Sugar, Maple'
          }
      // ]

      // Prices API obj example: https://stripe.com/docs/api/prices/list
      */

      var products =
        // Mock data if Stripe not connected and undefined.
        // The first entry represents a good example of the full data structure after processing
        [
          {
            name: "tucan-mexico-paraiso_mexicano",
            description:
              "Notes of ripe pinot grape and dried dates squabble with fresh raspberry and wild honeycomb to conclude in hazelnut or chocolate. This is wild balance and tastes just like you always imagined.",
            id: "prod_IJXaa5F9JfnzXJ",
            type: "Paraiso Mexicano",
            roaster: "Tucan",
            origin: "Mexico",
            decaf: "No",
            notes: "Cocoa, Cane Sugar, Maple",
            color: "rgba(113,171,184,0.55)",
            prices: { "5lbs": 3500, "2lbs": 2200, "10oz": 1800 },
          },
          {
            name: "tucan-ethiopia-ethiopia_raro",
            description:
              "Huge, juicy orchard fruits and candied citrus swirl around a gianduia center and end with notes of sweet pomegranate and grains of paradise. This is a laughing abandon of the status quo and leaves you happily in the jaws of the beast.",
            id: "prod_IJXXqtrBQqsmht",
            type: "Ethiopia Raro",
            roaster: "Tucan",
            origin: "Ethipia",
            decaf: "No",
            notes: "Raspberry, Mango, Peach",
            color: "rgba(247,242,142,0.5)",
            prices: { "5lbs": 3700, "2lbs": 2600, "10oz": 2200 },
          },
          {
            name: "tucan-east_timor-tropical_weather",
            description:
              "Warm and creamy caramel notes and a snakebite of huckleberry acidity finishes in toasted filberts. Named after our neighborhood volcano. Created to wake the sleeping giant.",
            id: "prod_IJXUil0aJmSBwr",
            type: "Tropical Weather",
            roaster: "Tucans",
            origin: "East Minor",
            decaf: "No",
            notes: "Dark Chocolate, Tobacco, Marshmallow",
            color: "rgba(202,225,148,0.5)",
            prices: { "5lbs": 3600, "2lbs": 2500, "10oz": 1800 },
          },
          {
            name: "geckos-rwanda-nyaruguru",
            description:
              "For the drop-ins, big gatherings, quiet moments and long conversations. Sweet, bing cherry and black tea petals invite you to sink into the warmth of smooth chocolate. ",
            id: "prod_IIkua3c39bxR94",
            type: "Nyaruguru",
            roaster: "Geckos",
            origin: "Rwanda",
            decaf: "No",
            notes: "Bing Cherry, Black Tea, Dark Chocolate",
            color: "rgba(139,193,80,0.43)",
            prices: { "5lbs": 3600, "2lbs": 2200, "10oz": 1700 },
          },
          {
            name: "geckos-honduras-decaf_honduras",
            description:
              "This is unabashedly sunny and as refreshing as skinny dipping with strangers. A floral chorus of chamomile and elderberry petals dance with lemon-lime acidity and finish with a bite of milk chocolate.",
            id: "prod_IIkryLigwjBTLk",
            type: "El Paraiso",
            roaster: "Geckos",
            origin: "Honduras",
            decaf: "Yes",
            notes: "Chocolate, Marshmallow, Cherry",
            color: "rgba(139,193,80,0.4)",
            prices: { "5lbs": 4000, "2lbs": 2500, "10oz": 2000 },
          },
          {
            name: "geckos-ethiopia-bensa_shantawene",
            description:
              "Warm and creamy caramel notes and a snakebite of huckleberry acidity finishes in toasted filberts. Named after our neighborhood volcano. Created to wake the sleeping giant.",
            id: "prod_IIkp43DGleP7il",
            type: "Bensa Shantawene",
            roaster: "Geckos",
            origin: "Ethiopia",
            decaf: "No",
            notes: "Peach Tea, Hibiscus, Floral",
            color: "rgba(111,69,143,0.37)",
            prices: { "5lbs": 2900, "2lbs": 2000, "10oz": 1500 },
          },
          {
            name: "bear-peru-la_tierra",
            description:
              "This is unabashedly sunny and as refreshing as skinny dipping with strangers. A floral chorus of chamomile and elderberry petals dance with lemon-lime acidity and finish with a bite of milk chocolate.",
            id: "prod_IIkmvdIf7D5Cfn",
            type: "San Martin",
            roaster: "Bear Coffee",
            origin: "Peru",
            decaf: "Yes",
            notes: "Brown Sugar, Pecan Pie, Maple",
            color: "rgba(240,122,140,0.5)",
            prices: { "5lbs": 4000, "2lbs": 2700, "10oz": 2200 },
          },
          {
            name: "bear-mexico-chiapas",
            description:
              "Natural black honey processed from Chiapas, Mexico. Tasting notes of Dark Chocolate, Cane Sugar, Plum",
            id: "prod_IIkgEVM3gFn3vM",
            type: "Chiapas",
            roaster: "Bear Coffee",
            origin: "Mexico",
            decaf: "No",
            notes: "Dark Chocolate, Cane Sugar, Plum",
            color: "rgba(52,54,85,0.45)",
            prices: { "5lbs": 3400, "2lbs": 2400, "10oz": 2000 },
          },
          {
            name: "bear-kenya-bungoma",
            description:
              "Huge, juicy orchard fruits and candied citrus swirl around a gianduia center and end with notes of sweet pomegranate and grains of paradise. This is a laughing abandon of the status quo and leaves you happily in the jaws of the beast.",
            id: "prod_IGmBRVQ5m7HrTY",
            type: "Bungoma",
            roaster: "Bear Coffee",
            origin: "Kenya",
            decaf: "No",
            notes: "Brown Sugar, Lemon, Melon",
            color: "rgba(246,246,246,1)",
            prices: { "5lbs": 3200, "2lbs": 2200, "10oz": 1800 },
          },
        ];

      return {
        data: {
          ...data,
          products,
        },
      };
    },
  },

  //#region base hooks and example code. Our project hooks are above.
  // {
  //   hook: 'html',
  //   name: 'compressHtml',
  //   description: "Uses regex to compress html. This is a big no-no, but let's give it a whirl.",
  //   priority: 1, // last please :D
  //   run: async ({ htmlString }) => {
  //     // this function takes the 'htmlString' prop, compresses it with Regex, then returns it.
  //     return {
  //       htmlString: htmlString
  //         .replace(/[ \t]/gi, ' ')
  //         .replace(/[ \n]/gi, ' ')
  //         .replace(/[ ]{2,}/gi, ' ')
  //         .replace(/>\s+</gi, '><'),
  //     };
  //   },
  // },

  {
    hook: "bootstrap",
    name: "copyAssetsToPublic",
    description:
      'Copies ./assets/ to the "distDir" defined in the elder.config.js. This function helps support the live reload process.',
    run: ({ settings }) => {
      // note that this function doesn't manipulate any props or return anything.
      // It is just executed on the 'bootstrap' hook which runs once when Elder.js is starting.

      // copy assets folder to public destination
      glob
        .sync(path.resolve(settings.rootDir, "./assets/**/*"))
        .forEach((file) => {
          const parsed = path.parse(file);
          // Only write the file/folder structure if it has an extension
          if (parsed.ext && parsed.ext.length > 0) {
            const relativeToAssetsFolder = path.relative(
              path.join(settings.rootDir, "./assets"),
              file
            );
            const outputPath = path.resolve(
              settings.distDir,
              relativeToAssetsFolder
            );
            fs.ensureDirSync(path.parse(outputPath).dir);
            fs.outputFileSync(outputPath, fs.readFileSync(file));
          }
        });
    },
  },

  // Below are some hooks to try and play with to get a better feel of what is possible.

  // {
  //   hook: 'data',
  //   name: 'addSomethingToData',
  //   description: 'Use this hook to add a key to the "data" object on the "home" route. ',
  //   priority: 50,
  //   run: async ({ request, data }) => {
  //     // when you uncomment this, check the homepage for a new box at the top.
  //     // IMPORTANT: If you want to add data to a specific route only, you should probably do it in your /route.js for that route.
  //     if (request.route === 'home') {
  //       return {
  //         data: {
  //           ...data,
  //           testingHooks: true,
  //         },
  //       };
  //     }
  //   },
  // },

  // {
  //   hook: 'bootstrap',
  //   name: 'populateDataForAllRequests',
  //   description:
  //     'The goal of this hook is to show you that you can get data from anywhere and add it to the data object.',
  //   priority: 50,
  //   run: async ({ data }) => {
  //     // when you uncomment this, check the homepage for a new box at the top.
  //     return {
  //       data: {
  //         ...data,
  //         testingHooks: true,
  //         // here we are using the 'os' node.js native, and passing in data on the number of CPUs
  //         cpus: os.cpus(),

  //         // NOTE: here we are polluting the global data object across all 'requests' because we are using the 'bootstrap' hook.
  //         // This is bad practice in this example because cpus is only used by Home.svelte, but it is illustrated to show how you could
  //         // add global data.

  //         // IMPORTANT: If you want to add data to a specific route only, you should probably do it in your /route.js for that route.
  //       },
  //     };
  //   },
  // },

  // If you'd like to see specific examples of how to do things that you think could help improve the template please create a GH issue.

  //#endregion
];
module.exports = hooks;
