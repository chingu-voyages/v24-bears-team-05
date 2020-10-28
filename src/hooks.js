const path = require("path");
const glob = require("glob");
const fs = require("fs-extra");
const os = require("os");

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
      let products = [
        // Mock data if Stripe not connected and undefined.
        // The first entry represents a good example of the full data structure after processing
        {
          name: "Bear Coffee",
          origin: "Kenya",
          roastProfile: "Bungoma",
          color: "rgba(83, 77, 86, 0.5)",
          price: "$18",
          src:
            "https://s3-alpha-sig.figma.com/img/d2ae/6b35/e3da824053ae97882387329125ede01e?Expires=1604275200&Signature=E~CLe6rZqmWG6wnf1SqQEU8i-CTkzoa-0PUlepqbWbW4Tno~i2oWUXovgnxgDKx70lBK3ikBN7KpF4KeNVQXrZPhufShj6stjjR3KQ~Ceo9-hG3miOVEXN0N2TPlqFDhjUREINGwrz8UPLLc2-9jvJcU~oyogWbU~2nb-KCnikvcX33Oo957pvjFE1Jk1TZjX9LaUdUvjkyxgJCROSOuWc2hFeh-Hu-mUg8ja1G~ybqugbsGWVGKhRvDTvnm7KvLMQq-YEvgXDcQOritsBI-O-~T7eiJIuQD50l~liq7BfzspMZmxhFaVgWyv4hdi~Of3JdwGoTn5tYrsuOTuczLBg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        },
        {
          name: "Tucan",
          origin: "Ethiopia",
          roastProfile: "Ethiopia Raro",
          color: "hsl(57,87%,68%,0.5)",
          price: "$22",
          src:
            "https://s3-alpha-sig.figma.com/img/7251/70b5/9a04f258af1c509301eb717292e55b04?Expires=1604275200&Signature=ZRH-s9Y238OEW9NUvNEai2kutIY3y~5Kz7evubJf4XRmE77QkVsWZdHaC7mbjIBT3uBXoCnL5G4PZ8dGbtx8SwQTUJ2m80fScvRRmACNVIJJP~clcMHufgZ~XMdzYSAyyoGIWkTngE9R52znv2w1d4CrOOX-ocFg~Z7xtilvq1ywVW2y1DKKGIDfPphyosiCjZ85HVC4jqZ2qyEzEKS4eMNNBF6Gsw7S9~ZENZ71Y0-TD7Ifs5JhJTmED9uGA997bhmY-RCUPkfBkJkSuBr0n6-IK~EJwl82IbFniRZBIR5y92T6grPzneFHUwjWz1odxWKsPIaXt8APskv70-oeUQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        },
        {
          name: "Tucan",
          origin: "Mexico",
          roastProfile: "Paraiso Veracruz",
          color: "hsl(191,35%,50%,0.5)",
          price: "$20",
          src:
            "https://s3-alpha-sig.figma.com/img/54db/e45d/f6775d54a23be2a8723bbb8fb392ecab?Expires=1604275200&Signature=bJ-Gwz7r82O~UgqiQgnNp8OJZMihA9VyJo3om2elrItXm30ea9AUPJLPENDYcipm7I6H~H3-8wZfhP7nJr85~wAamSDhnGUggGweb-uTot4WItAZAsDDLq76h9n0oEd8j~y6v-liJwosdE0qk2JWgJNHxhbdG6ceX7ITjP387rNh2yr5eC5XJleXhg9id1k64qY8C0QR-NsEO3XnVfq56CqpPyRW7ZbBJxsyFnXblQHpGz2YeYwPfZOIasJG5p-PysXsop8nw7UGCYVYr4Wrz7UKnelzcMDf~TB2Fl4zhZeQvarw7XobC16QyFix5NfVmBUeLC1cNzbu2qU041r1Fw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        },
      ];
      // Generate slugs
      products = products.map((product) => {
        let { name, origin, roastProfile } = product;
        [name, origin, roastProfile] = [name, origin, roastProfile].map((str) =>
          str.replace(/\s+/g, "-").toLowerCase()
        );
        return { ...product, slug: `/beans/${name}/${origin}/${roastProfile}` };
      });
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
