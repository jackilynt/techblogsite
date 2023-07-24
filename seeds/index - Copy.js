const sequelizeConn = require('../config/connection');
// //const seedRecipe = require('./recipeData')
const { Recipe, User } = require("../models")
const recipeData = require("./recipeData.json");


const seedAll = async () => {
  await sequelizeConn.sync({ force: true }); // reset tables
  console.log("Running seed")

  recipeData;

  Recipe.bulkCreate(recipeData);


  // await seedRecipe();
  // // TBD
  // const recipeData = [
  //   // your recipe data here
  //   {
  //     title: 'Lemon Herb Roasted Chicken',
  //     ingredients: 'Whole chicken, lemon, garlic, fresh herbs (such as rosemary, thyme, and parsley), olive oil, salt, black pepper',
  //     instructions: '1. Preheat the oven to 425°F (220°C). 2. Rinse the whole chicken and pat it dry with paper towels. 3. Season the chicken generously with salt and black pepper, both inside and out. 4. Cut the lemon into wedges and stuff them inside the chicken cavity along with a few garlic cloves and a handful of fresh herbs. 5. Tie the chicken legs together with kitchen twine to keep the stuffing inside. 6. Place the chicken on a roasting rack in a roasting pan. 7. Drizzle olive oil over the chicken and rub it all over the skin. 8. Sprinkle additional salt, black pepper, and chopped fresh herbs over the chicken. 9. Roast the chicken in the preheated oven for about 1 hour and 15 minutes, or until the internal temperature reaches 165°F (74°C) when measured with a meat thermometer. 10. Remove the chicken from the oven and let it rest for 10-15 minutes before carving. 11. Serve the lemon herb roasted chicken with your favorite side dishes and enjoy!',
  //   },
  //   {
  //     title: "Spinach Dip",
  //     ingredients: "Spinach, cream cheese, sour cream, garlic, parmesan cheese",
  //     instructions: "1. In a mixing bowl, combine spinach, cream cheese, sour cream, garlic, and parmesan cheese. Stir until well blended. 2. Transfer the mixture to a serving dish. 3. Serve with tortilla chips or bread slices.",
  //   },
  //   {
  //     title: "Grilled Steak",
  //     ingredients: "Steak, salt, black pepper, olive oil",
  //     instructions: "1. Preheat the grill to high heat. 2. Season the steak with salt and black pepper on both sides.3. Drizzle olive oil over the steak.4. Place the steak on the grill and cook for about 4-6 minutes per side, or until desired doneness.5. Remove the steak from the grill and let it rest for a few minutes.6. Slice the steak and serve.",
  //   },
  //   {
  //     title: "Chocolate Brownies",
  //     ingredients: "Butter, sugar, eggs, cocoa powder, flour, vanilla extract, chocolate chips",
  //     instructions: "1. Preheat the oven to 350°F (175°C) and grease a baking pan. 2. In a saucepan, melt the butter over low heat. Remove from heat and stir in the sugar. 3. Beat in the eggs, one at a time, then stir in the cocoa powder, flour, and vanilla extract. 4. Fold in the chocolate chips.\n5. Pour the batter into the prepared baking pan and spread it evenly. 6. Bake for approximately 25-30 minutes, or until a toothpick inserted into the center comes out with a few moist crumbs. 7. Allow the brownies to cool before cutting into squares and serving.",
  //   },
  //   {
  //     title: "Caprese Salad",
  //     ingredients: "Tomatoes, mozzarella cheese, fresh basil leaves, balsamic vinegar, olive oil, salt, pepper",
  //     instructions: "1. Slice the tomatoes and mozzarella cheese into rounds. 2. Arrange the tomato and mozzarella slices on a serving plate, alternating them. 3. Place a fresh basil leaf on top of each tomato and mozzarella slice.4. Drizzle balsamic vinegar and olive oil over the salad. 5. Sprinkle with salt and pepper to taste.6. Serve immediately.",
  //   },
  //   {
  //     title: "Apple Pie",
  //     ingredients: "Apples, sugar, cinnamon, nutmeg, lemon juice, butter, pie crust",
  //     instructions: "1. Preheat the oven to 425°F (220°C) and prepare the pie crust.2. Peel, core, and slice the apples. 3. In a bowl, combine the sliced apples, sugar, cinnamon, nutmeg, and lemon juice. Mix well. 4. Transfer the apple mixture into the pie crust, mounding it slightly. 5. Dot the top of the apples with butter. 6. Cover the pie with the second pie crust, sealing the edges. 7. Cut slits on the top crust to allow steam to escape. 8. Bake for about 45-50 minutes, or until the crust is golden and the apples are tender. 9. Remove from the oven and let it cool before serving."
  //   },
  //   {
  //     title: "Chicken Parmesan",
  //     ingredients: "Chicken breasts, breadcrumbs, Parmesan cheese, marinara sauce, mozzarella cheese, olive oil, salt, pepper",
  //     instructions: "1. Preheat the oven to 375°F (190°C) and lightly grease a baking dish. 2. Season the chicken breasts with salt and pepper. 3. In a shallow dish, combine breadcrumbs and grated Parmesan cheese. 4. Dip each chicken breast into the breadcrumb mixture, pressing gently to coat both sides. 5. Heat olive oil in a skillet over medium heat and cook the chicken breasts until golden brown on both sides. 6. Transfer the chicken breasts to the baking dish. 7. Pour marinara sauce over the chicken breasts. 8. Sprinkle shredded mozzarella cheese on top. 9. Bake for about 20-25 minutes, or until the cheese is melted and bubbly. 10. Serve with pasta or a side salad."
  //   },
  //   {
  //     title: "Guacamole",
  //     ingredients: "Avocados, lime juice, red onion, tomatoes, cilantro, jalapeno, salt, pepper",
  //     instructions: "1. Cut the avocados in half, remove the pits, and scoop the flesh into a bowl. 2. Mash the avocados with a fork until desired consistency. 3. Stir in lime juice to prevent browning. 4. Finely chop red onion, tomatoes, cilantro, and jalapeno. 5. Add the chopped ingredients to the bowl with mashed avocados. 6. Season with salt and pepper to taste. 7. Mix well to combine all the ingredients. 8. Serve with tortilla chips or as a topping for tacos, nachos, or salads."
  //   },
  //   {
  //     title: "BBQ Ribs",
  //     ingredients: "Pork ribs, BBQ sauce, brown sugar, paprika, garlic powder, salt, black pepper",
  //     instructions: "1. Preheat the oven to 300°F (150°C). 2. In a small bowl, combine brown sugar, paprika, garlic powder, salt, and black pepper to make the dry rub. 3. Rub the dry rub all over the pork ribs, covering both sides. 4. Place the ribs on a baking sheet and cover tightly with aluminum foil. 5. Bake for 2.5 to 3 hours, or until the ribs are tender. 6. Remove the foil and brush BBQ sauce over the ribs. 7. Increase the oven temperature to 400°F (200°C) and bake for an additional 15 minutes, or until the sauce is sticky and caramelized.\n8. Let the ribs rest for a few minutes before serving."
  //   },
  //   {
  //     title: "Caesar Salad",
  //     ingredients: "Romaine lettuce, croutons, Parmesan cheese, Caesar dressing, lemon juice, garlic, olive oil, salt, black pepper",
  //     instructions: "1. Wash and dry the romaine lettuce leaves. Tear them into bite-sized pieces. 2. In a large bowl, whisk together Caesar dressing, lemon juice, minced garlic, olive oil, salt, and black pepper to make the dressing. 3. Add the romaine lettuce to the bowl and toss to coat the leaves with the dressing. 4. Sprinkle croutons and grated Parmesan cheese over the salad. 5. Toss again gently to combine all the ingredients. 6. Serve immediately as a side dish or add grilled chicken or shrimp for a main course."
  //   },
  //   {
  //     title: "Blueberry Muffins",
  //     ingredients: "All-purpose flour, granulated sugar, baking powder, salt, unsalted butter, milk, eggs, vanilla extract, fresh blueberries",
  //     instructions: "1. Preheat the oven to 375°F (190°C) and line a muffin tin with paper liners. 2. In a large mixing bowl, combine all-purpose flour, granulated sugar, baking powder, and salt. 3. Cut the unsalted butter into small pieces and add them to the dry ingredients. Use a pastry cutter or your fingers to blend the butter into the flour mixture until it resembles coarse crumbs. 4. In a separate bowl, whisk together milk, eggs, and vanilla extract. 5. Pour the wet ingredients into the dry ingredients and stir until just combined. 6. Gently fold in fresh blueberries. 7. Divide the batter evenly among the muffin cups, filling each about two-thirds full. 8. Bake for 18-20 minutes, or until a toothpick inserted into the center of a muffin comes out clean. 9. Allow the muffins to cool in the tin for a few minutes before transferring them to a wire rack to cool completely."
  //   },
  //   {
  //     title: "Mediterranean Quinoa Salad",
  //     ingredients: "Quinoa, cherry tomatoes, cucumber, red onion, kalamata olives, feta cheese, fresh parsley, lemon juice, olive oil, salt, black pepper",
  //     instructions: "1. Cook the quinoa according to package instructions and let it cool. 2. In a large bowl, combine the cooked quinoa, cherry tomatoes (halved), cucumber (diced), red onion (finely chopped), kalamata olives (pitted and halved), and crumbled feta cheese. 3. In a small bowl, whisk together lemon juice, olive oil, salt, and black pepper to make the dressing. 4. Drizzle the dressing over the quinoa mixture and toss to combine. 5. Garnish with fresh parsley. Serve chilled or at room temperature."
  //   },
  //   {
  //     title: "Spicy Thai Basil Chicken Stir-Fry",
  //     ingredients: "Chicken breast, Thai basil leaves, garlic, birds eye chili, soy sauce, oyster sauce, fish sauce, sugar, vegetable oil",
  //     instructions: "1. Slice the chicken breast into thin strips. 2. Heat vegetable oil in a wok or large skillet over high heat. 3. Add minced garlic and birds eye chili to the hot oil and stir- fry for a few seconds until fragrant. 4. Add the sliced chicken and stir - fry until cooked through. 5. In a small bowl, whisk together soy sauce, oyster sauce, fish sauce, and sugar. 6. Pour the sauce into the wok and stir - fry for another minute. 7. Add Thai basil leaves and continue stir-frying until the basil wilts. 8. Remove from heat and serve with steamed rice."
  //   },
  //   {
  //     title: "Creamy Mushroom Risotto",
  //     ingredients: "Arborio rice, mushrooms (such as cremini or shiitake), onion, garlic, vegetable broth, white wine, Parmesan cheese, butter, olive oil, fresh thyme, salt, black pepper",
  //     instructions: "1. Heat vegetable broth in a saucepan and keep it warm over low heat. 2. In a separate large pan, heat olive oil and butter over medium heat. 3. Add diced onion and minced garlic, and sauté until softened. 4. Add sliced mushrooms and cook until they release their moisture and turn golden brown. 5. Add Arborio rice and stir to coat the grains with oil. 6. Pour in white wine and cook until it evaporates. 7. Begin adding the warm vegetable broth, one ladleful at a time, stirring frequently until the liquid is absorbed. Repeat until the rice is creamy and al dente. 8. Stir in grated Parmesan cheese, fresh thyme leaves, salt, and black pepper. 9. Remove from heat, cover, and let it rest for a few minutes before serving."
  //   },
  //   {
  //     title: "Greek-Style Grilled Lamb Chops",
  //     ingredients: "Lamb chops, lemon juice, olive oil, garlic, dried oregano, salt, black pepper",
  //     instructions: "1. In a bowl, combine lemon juice, olive oil, minced garlic, dried oregano, salt, and black pepper to make the marinade. 2. Place the lamb chops in a shallow dish and pour the marinade over them. Let them marinate for at least 1 hour, or overnight for better flavor. 3. Preheat the grill to medium-high heat. 4. Grill the lamb chops for about 3-4 minutes per side for medium-rare, or adjust the cooking time according to your desired doneness. 5. Remove from the grill and let them rest for a few minutes before serving."
  //   },
  //   {
  //     title: "Classic Tiramisu",
  //     ingredients: "Ladyfingers, espresso coffee, mascarpone cheese, sugar, egg yolks, cocoa powder",
  //     instructions: "1. Brew strong espresso coffee and let it cool. 2. In a mixing bowl, whisk together mascarpone cheese, sugar, and egg yolks until creamy and well combined. 3. Dip each ladyfinger into the cooled espresso coffee and arrange them in a single layer in a serving dish. 4. Spread a layer of the mascarpone mixture over the ladyfingers. Repeat the layers until all the ladyfingers and mascarpone mixture are used, ending with a layer of mascarpone on top. 5. Dust the top with cocoa powder. 6. Cover and refrigerate for at least 4 hours, or overnight for best results. 7. Serve chilled and enjoy!"
  //   },
  //   {
  //     title: "Baked Salmon with Lemon-Dill Sauce",
  //     ingredients: "Salmon fillets, lemon juice, fresh dill, garlic, olive oil, salt, black pepper",
  //     instructions: "1. Preheat the oven to 375°F (190°C) and line a baking sheet with parchment paper. 2. In a small bowl, whisk together lemon juice, minced garlic, chopped fresh dill, olive oil, salt, and black pepper to make the sauce. 3. Place the salmon fillets on the prepared baking sheet and brush them with the lemon-dill sauce. 4. Bake in the preheated oven for about 12-15 minutes, or until the salmon is cooked through and flakes easily with a fork. 5. Serve the baked salmon with extra lemon-dill sauce on the side."
  //   },
  //   {
  //     title: "Homemade Margherita Pizza",
  //     ingredients: "Pizza dough, tomato sauce, mozzarella cheese, fresh basil leaves, olive oil, salt, black pepper",
  //     instructions: "1. Preheat the oven to the highest temperature (usually 500°F or 260°C). 2. Roll out the pizza dough into a round shape on a floured surface. 3. Transfer the rolled-out dough to a baking sheet or pizza stone. 4. Spread tomato sauce evenly over the dough, leaving a small border around the edges. 5. Arrange slices of mozzarella cheese over the sauce. 6. Tear fresh basil leaves and scatter them on top of the cheese. 7. Drizzle olive oil over the pizza and sprinkle with salt and black pepper. 8. Bake in the preheated oven for about 10-12 minutes, or until the crust is golden and the cheese is bubbly and slightly browned. 9. Remove from the oven and let it cool for a few minutes before slicing and serving."
  //   },
  //   {
  //     title: "Chicken and Vegetable Stir-Fry",
  //     ingredients: "Chicken breast, mixed vegetables (such as bell peppers, broccoli, carrots), soy sauce, oyster sauce, garlic, ginger, vegetable oil, cornstarch",
  //     instructions: "1. Slice the chicken breast into thin strips. 2. In a small bowl, mix together soy sauce, oyster sauce, minced garlic, grated ginger, and cornstarch to make the sauce. Set aside. 3. Heat vegetable oil in a wok or large skillet over high heat. 4. Add the sliced chicken and stir-fry until cooked through. 5. Add the mixed vegetables and continue stir-frying until they are tender-crisp. 6. Pour the sauce over the chicken and vegetables, and stir to coat evenly. 7. Cook for another minute until the sauce thickens. 8. Remove from heat and serve the stir-fry over steamed rice or noodles."
  //   },
  //   {
  //     title: "Caprese Stuffed Portobello Mushrooms",
  //     ingredients: "Portobello mushrooms, fresh mozzarella cheese, cherry tomatoes, fresh basil leaves, balsamic glaze, olive oil, salt, black pepper",
  //     instructions: "1. Preheat the oven to 400°F (200°C) and line a baking sheet with parchment paper. 2. Remove the stems from the portobello mushrooms and gently scrape out the gills with a spoon. 3. Drizzle olive oil over the mushrooms and season with salt and black pepper. 4. Place the mushrooms on the prepared baking sheet, gill side up. 5. Fill each mushroom cap with slices of fresh mozzarella cheese, halved cherry tomatoes, and torn basil leaves. 6. Drizzle balsamic glaze over the stuffed mushrooms. 7. Bake in the preheated oven for about 15-20 minutes, or until the mushrooms are tender and the cheese is melted and bubbly. 8. Serve the caprese stuffed portobello mushrooms as a delicious appetizer or main course."
  //   },
  //   {
  //     title: "Homemade Chocolate Chip Cookies",
  //     ingredients: "Butter, granulated sugar, brown sugar, eggs, vanilla extract, all-purpose flour, baking soda, salt, chocolate chips",
  //     instructions: "1. Preheat the oven to 375°F (190°C) and line a baking sheet with parchment paper. 2. In a mixing bowl, cream together softened butter, granulated sugar, and brown sugar until light and fluffy. 3. Beat in the eggs, one at a time, and then stir in the vanilla extract. 4. In a separate bowl, whisk together all-purpose flour, baking soda, and salt. Gradually add the dry ingredients to the butter mixture and mix until well combined. 5. Fold in the chocolate chips. 6. Drop rounded tablespoons of cookie dough onto the prepared baking sheet, spacing them apart. 7. Bake in the preheated oven for about 10-12 minutes, or until the edges are golden brown. 8. Remove from the oven and let the cookies cool on the baking sheet for a few minutes before transferring them to a wire rack to cool completely."
  //   },
  //   {
  //     title: "Vegetable Pad Thai",
  //     ingredients: "Rice noodles, tofu, bell peppers, bean sprouts, carrots, green onions, garlic, peanuts, lime, soy sauce, tamarind paste, brown sugar",
  //     instructions: "1. Cook rice noodles according to package instructions, then drain and set aside. 2. In a wok or large skillet, heat oil over medium heat. Add tofu and cook until browned and crispy. 3. Push tofu to one side of the wok and add bell peppers, bean sprouts, carrots, and green onions. Stir-fry for a few minutes until vegetables are slightly tender. 4. In a small bowl, whisk together garlic, peanuts, lime juice, soy sauce, tamarind paste, and brown sugar to make the sauce. 5. Pour the sauce over the vegetables and tofu, and add the cooked rice noodles. Toss everything together until well coated. 6. Cook for an additional 2-3 minutes to heat through. 7. Serve the vegetable pad Thai hot, garnished with extra peanuts and lime wedges."
  //   },
  //   {
  //     title: "Chicken Enchiladas",
  //     ingredients: "Cooked chicken, tortillas, enchilada sauce, shredded cheese, onion, bell peppers, garlic, cumin, chili powder, salt, black pepper",
  //     instructions: "1. Preheat the oven to 350°F (175°C). Grease a baking dish. 2. In a skillet, heat olive oil over medium heat. Add chopped onion, sliced bell peppers, and minced garlic. Sauté until vegetables are softened. 3. Add cooked chicken, cumin, chili powder, salt, and black pepper to the skillet. Stir to combine and cook for a few minutes. 4. Warm tortillas in the microwave or on a skillet until pliable. 5. Spread a small amount of enchilada sauce on each tortilla. 6. Spoon the chicken mixture onto the tortillas and roll them up tightly. Place them seam-side down in the prepared baking dish. 7. Pour the remaining enchilada sauce over the rolled tortillas. Sprinkle shredded cheese on top. 8. Bake in the preheated oven for about 20-25 minutes, or until the cheese is melted and bubbly. 9. Remove from the oven and let the enchiladas cool for a few minutes before serving. Garnish with chopped cilantro, if desired."
  //   },
  //   {
  //     title: "Pesto Pasta",
  //     ingredients: "Pasta, fresh basil, pine nuts, garlic, Parmesan cheese, olive oil, salt, black pepper",
  //     instructions: "1. Cook pasta according to package instructions, then drain and set aside. 2. In a food processor, combine fresh basil, pine nuts, minced garlic, grated Parmesan cheese, olive oil, salt, and black pepper. Blend until smooth and well combined. 3. In a large mixing bowl, toss the cooked pasta with the pesto sauce until evenly coated. 4. Adjust the seasoning to taste. 5. Serve the pesto pasta warm, garnished with additional grated Parmesan cheese and fresh basil leaves."
  //   },
  //   {
  //     title: "Stuffed Bell Peppers",
  //     ingredients: "Bell peppers, ground beef, rice, onion, garlic, tomato sauce, shredded cheese, Italian seasoning, salt, black pepper",
  //     instructions: "1. Preheat the oven to 375°F (190°C). Cut the tops off the bell peppers and remove the seeds and membranes. 2. In a skillet, cook ground beef over medium heat until browned. Drain any excess grease. 3. In the same skillet, add chopped onion and minced garlic. Sauté until the onion is translucent. 4. Add cooked rice, tomato sauce, Italian seasoning, salt, and black pepper to the skillet. Stir to combine. 5. Spoon the beef and rice mixture into the bell peppers, filling them to the top. 6. Place the stuffed bell peppers in a baking dish and cover with foil. 7. Bake for about 30-35 minutes, or until the peppers are tender. 8. Remove the foil, sprinkle shredded cheese on top of each pepper, and bake for an additional 5 minutes or until the cheese is melted and bubbly. 9. Let the stuffed bell peppers cool for a few minutes before serving."
  //   },
  //   {
  //     title: "Shrimp Scampi",
  //     ingredients: "Shrimp, garlic, lemon juice, white wine, butter, olive oil, parsley, salt, black pepper, red pepper flakes",
  //     instructions: "1. In a large skillet, heat olive oil and melt butter over medium heat. Add minced garlic and red pepper flakes. Sauté for a minute until fragrant. 2. Add shrimp to the skillet and cook until they turn pink, stirring occasionally. 3. Pour in white wine and lemon juice. Simmer for a few minutes until the liquid reduces slightly. 4. Season with salt and black pepper to taste. 5. Remove from heat and stir in chopped parsley. 6. Serve the shrimp scampi hot, garnished with additional parsley and lemon wedges. Pair with crusty bread or pasta, if desired."
  //   },
  //   {
  //     title: "Avocado Toast",
  //     ingredients: "Bread, avocado, lemon juice, red pepper flakes, salt, black pepper, olive oil",
  //     instructions: "1. Toast the bread slices until golden and crispy. 2. In a bowl, mash the avocado with a fork. Add lemon juice, red pepper flakes, salt, and black pepper. Mix well. 3. Spread the avocado mixture evenly onto the toasted bread slices. 4. Drizzle with olive oil and sprinkle with additional red pepper flakes, if desired. 5. Serve the avocado toast as a delicious and nutritious breakfast or snack."
  //   },
  //   {
  //     title: "Strawberry Shortcake",
  //     ingredients: "Strawberries, shortcake biscuits, whipped cream, sugar",
  //     instructions: "1. Wash and slice the strawberries. Sprinkle them with sugar and let them macerate for about 30 minutes to release their juices. 2. Prepare the shortcake biscuits according to your favorite recipe or use store-bought ones. 3. Slice the shortcake biscuits in half horizontally. 4. Spoon a generous amount of macerated strawberries onto the bottom half of each biscuit. 5. Top with a dollop of whipped cream. 6. Place the top half of the biscuit on the whipped cream. 7. Serve the strawberry shortcakes immediately and enjoy!"
  //   },
  //   {
  //     title: "Mango Sticky Rice",
  //     ingredients: "Sticky rice, mangoes, coconut milk, sugar, salt, sesame seeds",
  //     instructions: "1. Soak sticky rice in water for at least 4 hours or overnight. Drain the rice and steam it until cooked and sticky. 2. In a saucepan, heat coconut milk, sugar, and salt over medium heat until the sugar dissolves. Remove from heat and let it cool. 3. Peel and slice the mangoes. 4. Serve the sticky rice on a plate, topped with sliced mangoes. 5. Drizzle the coconut milk sauce over the rice and mangoes. 6. Sprinkle sesame seeds on top as a garnish. 7. Enjoy the delicious and tropical mango sticky rice!"
  //   },
  //   {
  //     title: "Chocolate Lava Cake",
  //     ingredients: "Dark chocolate, butter, eggs, sugar, all-purpose flour, salt, vanilla ice cream, raspberries (optional)",
  //     instructions: "1. Preheat the oven to 425°F (220°C). Grease individual ramekins or oven-safe cups. 2. In a microwave-safe bowl, melt the dark chocolate and butter together. Stir until smooth. 3. In a separate bowl, whisk together eggs and sugar until well combined. 4. Slowly pour the melted chocolate mixture into the egg mixture, whisking constantly. 5. Add all-purpose flour and salt, and stir until just combined. 6. Divide the batter evenly among the prepared ramekins. 7. Bake for about 12-14 minutes, or until the edges are set but the center is still slightly jiggly. 8. Remove the ramekins from the oven and let them cool for a few minutes. 9. Carefully invert each ramekin onto a plate, and remove it to reveal the gooey chocolate lava center. 10. Serve the chocolate lava cakes warm, accompanied by a scoop of vanilla ice cream and fresh raspberries, if desired."
  //   },
  //   {
  //     title: "Beef Stir-Fry",
  //     ingredients: "Beef (sirloin or flank steak), soy sauce, sesame oil, garlic, ginger, vegetables (broccoli, bell peppers, carrots, snap peas), cornstarch, vegetable oil, green onions, salt, black pepper",
  //     instructions: "1. Thinly slice the beef against the grain and place it in a bowl. 2. In a separate bowl, whisk together soy sauce, sesame oil, minced garlic, and grated ginger to make the marinade. Pour the marinade over the beef slices and let them marinate for about 20-30 minutes. 3. In a small bowl, dissolve cornstarch in water to make a slurry. Set aside. 4. Heat vegetable oil in a wok or large skillet over high heat. Add the marinated beef (reserving the marinade) and stir-fry until browned. Remove the beef from the pan and set it aside. 5. In the same pan, add the vegetables (broccoli, bell peppers, carrots, snap peas, or any other vegetables of your choice). Stir-fry until they are crisp-tender. 6. Return the beef to the pan with the vegetables. 7. Pour the reserved marinade over the beef and vegetables. Stir in the cornstarch slurry to thicken the sauce. 8. Cook for an additional 2-3 minutes until the sauce coats the beef and vegetables. 9. Season with salt and black pepper to taste. 10. Garnish with chopped green onions and serve the beef stir-fry hot over steamed rice or noodles."
  //   },
  //   {
  //     title: "Lemon Herb Roasted Chicken",
  //     ingredients: "Whole chicken, lemon, garlic, fresh herbs (such as rosemary, thyme, and parsley), olive oil, salt, black pepper",
  //     instructions: "1. Preheat the oven to 425°F (220°C). 2. Rinse the whole chicken and pat it dry with paper towels. 3. Season the chicken generously with salt and black pepper, both inside and out. 4. Cut the lemon into wedges and stuff them inside the chicken cavity along with a few garlic cloves and a handful of fresh herbs. 5. Tie the chicken legs together with kitchen twine to keep the stuffing inside. 6. Place the chicken on a roasting rack in a roasting pan. 7. Drizzle olive oil over the chicken and rub it all over the skin. 8. Sprinkle additional salt, black pepper, and chopped fresh herbs over the chicken. 9. Roast the chicken in the preheated oven for about 1 hour and 15 minutes, or until the internal temperature reaches 165°F (74°C) when measured with a meat thermometer. 10. Remove the chicken from the oven and let it rest for 10-15 minutes before carving. 11. Serve the lemon herb roasted chicken with your favorite side dishes and enjoy!"
  //   }
  // ];
  // await Recipe.bulkCreate(recipeData);

  // TODO: Will move into userData.js
  const userData = [
    {
      username: "kj",
      email: "kj@gmail.com",
      password: "123",
      recipe_id: [1]
    }
  ];
  await User.bulkCreate(userData);


  process.exit(0);
};

seedAll();


// const { Recipe, User } = require("../models");
// const { sequelize } = require("../models/index");

// const seedAll = async () => {
//   await sequelize.sync({ force: true });
//   console.log("Running seed");

//   const recipeData = [
//     // your recipe data here
//     {
//       title: 'Lemon Herb Roasted Chicken',
//       ingredients: 'Whole chicken, lemon, garlic, fresh herbs (such as rosemary, thyme, and parsley), olive oil, salt, black pepper',
//       instructions: '1. Preheat the oven to 425°F (220°C). 2. Rinse the whole chicken and pat it dry with paper towels. 3. Season the chicken generously with salt and black pepper, both inside and out. 4. Cut the lemon into wedges and stuff them inside the chicken cavity along with a few garlic cloves and a handful of fresh herbs. 5. Tie the chicken legs together with kitchen twine to keep the stuffing inside. 6. Place the chicken on a roasting rack in a roasting pan. 7. Drizzle olive oil over the chicken and rub it all over the skin. 8. Sprinkle additional salt, black pepper, and chopped fresh herbs over the chicken. 9. Roast the chicken in the preheated oven for about 1 hour and 15 minutes, or until the internal temperature reaches 165°F (74°C) when measured with a meat thermometer. 10. Remove the chicken from the oven and let it rest for 10-15 minutes before carving. 11. Serve the lemon herb roasted chicken with your favorite side dishes and enjoy!',
//     },
//     {
//       title: "Spinach Dip",
//       ingredients: "Spinach, cream cheese, sour cream, garlic, parmesan cheese",
//       instructions: "1. In a mixing bowl, combine spinach, cream cheese, sour cream, garlic, and parmesan cheese. Stir until well blended. 2. Transfer the mixture to a serving dish. 3. Serve with tortilla chips or bread slices.",
//     },
//     {
//       title: "Grilled Steak",
//       ingredients: "Steak, salt, black pepper, olive oil",
//       instructions: "1. Preheat the grill to high heat. 2. Season the steak with salt and black pepper on both sides.3. Drizzle olive oil over the steak.4. Place the steak on the grill and cook for about 4-6 minutes per side, or until desired doneness.5. Remove the steak from the grill and let it rest for a few minutes.6. Slice the steak and serve.",
//     },
//     {
//       title: "Chocolate Brownies",
//       ingredients: "Butter, sugar, eggs, cocoa powder, flour, vanilla extract, chocolate chips",
//       instructions: "1. Preheat the oven to 350°F (175°C) and grease a baking pan. 2. In a saucepan, melt the butter over low heat. Remove from heat and stir in the sugar. 3. Beat in the eggs, one at a time, then stir in the cocoa powder, flour, and vanilla extract. 4. Fold in the chocolate chips.\n5. Pour the batter into the prepared baking pan and spread it evenly. 6. Bake for approximately 25-30 minutes, or until a toothpick inserted into the center comes out with a few moist crumbs. 7. Allow the brownies to cool before cutting into squares and serving.",
//     },
//     {
//       title: "Caprese Salad",
//       ingredients: "Tomatoes, mozzarella cheese, fresh basil leaves, balsamic vinegar, olive oil, salt, pepper",
//       instructions: "1. Slice the tomatoes and mozzarella cheese into rounds. 2. Arrange the tomato and mozzarella slices on a serving plate, alternating them. 3. Place a fresh basil leaf on top of each tomato and mozzarella slice.4. Drizzle balsamic vinegar and olive oil over the salad. 5. Sprinkle with salt and pepper to taste.6. Serve immediately.",
//     },
//     {
//       title: "Apple Pie",
//       ingredients: "Apples, sugar, cinnamon, nutmeg, lemon juice, butter, pie crust",
//       instructions: "1. Preheat the oven to 425°F (220°C) and prepare the pie crust.2. Peel, core, and slice the apples. 3. In a bowl, combine the sliced apples, sugar, cinnamon, nutmeg, and lemon juice. Mix well. 4. Transfer the apple mixture into the pie crust, mounding it slightly. 5. Dot the top of the apples with butter. 6. Cover the pie with the second pie crust, sealing the edges. 7. Cut slits on the top crust to allow steam to escape. 8. Bake for about 45-50 minutes, or until the crust is golden and the apples are tender. 9. Remove from the oven and let it cool before serving."
//     },
//     {
//       title: "Chicken Parmesan",
//       ingredients: "Chicken breasts, breadcrumbs, Parmesan cheese, marinara sauce, mozzarella cheese, olive oil, salt, pepper",
//       instructions: "1. Preheat the oven to 375°F (190°C) and lightly grease a baking dish. 2. Season the chicken breasts with salt and pepper. 3. In a shallow dish, combine breadcrumbs and grated Parmesan cheese. 4. Dip each chicken breast into the breadcrumb mixture, pressing gently to coat both sides. 5. Heat olive oil in a skillet over medium heat and cook the chicken breasts until golden brown on both sides. 6. Transfer the chicken breasts to the baking dish. 7. Pour marinara sauce over the chicken breasts. 8. Sprinkle shredded mozzarella cheese on top. 9. Bake for about 20-25 minutes, or until the cheese is melted and bubbly. 10. Serve with pasta or a side salad."
//     },
//     {
//       title: "Guacamole",
//       ingredients: "Avocados, lime juice, red onion, tomatoes, cilantro, jalapeno, salt, pepper",
//       instructions: "1. Cut the avocados in half, remove the pits, and scoop the flesh into a bowl. 2. Mash the avocados with a fork until desired consistency. 3. Stir in lime juice to prevent browning. 4. Finely chop red onion, tomatoes, cilantro, and jalapeno. 5. Add the chopped ingredients to the bowl with mashed avocados. 6. Season with salt and pepper to taste. 7. Mix well to combine all the ingredients. 8. Serve with tortilla chips or as a topping for tacos, nachos, or salads."
//     },
//     {
//       title: "BBQ Ribs",
//       ingredients: "Pork ribs, BBQ sauce, brown sugar, paprika, garlic powder, salt, black pepper",
//       instructions: "1. Preheat the oven to 300°F (150°C). 2. In a small bowl, combine brown sugar, paprika, garlic powder, salt, and black pepper to make the dry rub. 3. Rub the dry rub all over the pork ribs, covering both sides. 4. Place the ribs on a baking sheet and cover tightly with aluminum foil. 5. Bake for 2.5 to 3 hours, or until the ribs are tender. 6. Remove the foil and brush BBQ sauce over the ribs. 7. Increase the oven temperature to 400°F (200°C) and bake for an additional 15 minutes, or until the sauce is sticky and caramelized.\n8. Let the ribs rest for a few minutes before serving."
//     },
//     {
//       title: "Caesar Salad",
//       ingredients: "Romaine lettuce, croutons, Parmesan cheese, Caesar dressing, lemon juice, garlic, olive oil, salt, black pepper",
//       instructions: "1. Wash and dry the romaine lettuce leaves. Tear them into bite-sized pieces. 2. In a large bowl, whisk together Caesar dressing, lemon juice, minced garlic, olive oil, salt, and black pepper to make the dressing. 3. Add the romaine lettuce to the bowl and toss to coat the leaves with the dressing. 4. Sprinkle croutons and grated Parmesan cheese over the salad. 5. Toss again gently to combine all the ingredients. 6. Serve immediately as a side dish or add grilled chicken or shrimp for a main course."
//     },
//     {
//       title: "Blueberry Muffins",
//       ingredients: "All-purpose flour, granulated sugar, baking powder, salt, unsalted butter, milk, eggs, vanilla extract, fresh blueberries",
//       instructions: "1. Preheat the oven to 375°F (190°C) and line a muffin tin with paper liners. 2. In a large mixing bowl, combine all-purpose flour, granulated sugar, baking powder, and salt. 3. Cut the unsalted butter into small pieces and add them to the dry ingredients. Use a pastry cutter or your fingers to blend the butter into the flour mixture until it resembles coarse crumbs. 4. In a separate bowl, whisk together milk, eggs, and vanilla extract. 5. Pour the wet ingredients into the dry ingredients and stir until just combined. 6. Gently fold in fresh blueberries. 7. Divide the batter evenly among the muffin cups, filling each about two-thirds full. 8. Bake for 18-20 minutes, or until a toothpick inserted into the center of a muffin comes out clean. 9. Allow the muffins to cool in the tin for a few minutes before transferring them to a wire rack to cool completely."
//     },
//     {
//       title: "Mediterranean Quinoa Salad",
//       ingredients: "Quinoa, cherry tomatoes, cucumber, red onion, kalamata olives, feta cheese, fresh parsley, lemon juice, olive oil, salt, black pepper",
//       instructions: "1. Cook the quinoa according to package instructions and let it cool. 2. In a large bowl, combine the cooked quinoa, cherry tomatoes (halved), cucumber (diced), red onion (finely chopped), kalamata olives (pitted and halved), and crumbled feta cheese. 3. In a small bowl, whisk together lemon juice, olive oil, salt, and black pepper to make the dressing. 4. Drizzle the dressing over the quinoa mixture and toss to combine. 5. Garnish with fresh parsley. Serve chilled or at room temperature."
//     },
//     {
//       title: "Spicy Thai Basil Chicken Stir-Fry",
//       ingredients: "Chicken breast, Thai basil leaves, garlic, birds eye chili, soy sauce, oyster sauce, fish sauce, sugar, vegetable oil",
//       instructions: "1. Slice the chicken breast into thin strips. 2. Heat vegetable oil in a wok or large skillet over high heat. 3. Add minced garlic and birds eye chili to the hot oil and stir- fry for a few seconds until fragrant. 4. Add the sliced chicken and stir - fry until cooked through. 5. In a small bowl, whisk together soy sauce, oyster sauce, fish sauce, and sugar. 6. Pour the sauce into the wok and stir - fry for another minute. 7. Add Thai basil leaves and continue stir-frying until the basil wilts. 8. Remove from heat and serve with steamed rice."
//     },
//     {
//       title: "Creamy Mushroom Risotto",
//       ingredients: "Arborio rice, mushrooms (such as cremini or shiitake), onion, garlic, vegetable broth, white wine, Parmesan cheese, butter, olive oil, fresh thyme, salt, black pepper",
//       instructions: "1. Heat vegetable broth in a saucepan and keep it warm over low heat. 2. In a separate large pan, heat olive oil and butter over medium heat. 3. Add diced onion and minced garlic, and sauté until softened. 4. Add sliced mushrooms and cook until they release their moisture and turn golden brown. 5. Add Arborio rice and stir to coat the grains with oil. 6. Pour in white wine and cook until it evaporates. 7. Begin adding the warm vegetable broth, one ladleful at a time, stirring frequently until the liquid is absorbed. Repeat until the rice is creamy and al dente. 8. Stir in grated Parmesan cheese, fresh thyme leaves, salt, and black pepper. 9. Remove from heat, cover, and let it rest for a few minutes before serving."
//     },
//     {
//       title: "Greek-Style Grilled Lamb Chops",
//       ingredients: "Lamb chops, lemon juice, olive oil, garlic, dried oregano, salt, black pepper",
//       instructions: "1. In a bowl, combine lemon juice, olive oil, minced garlic, dried oregano, salt, and black pepper to make the marinade. 2. Place the lamb chops in a shallow dish and pour the marinade over them. Let them marinate for at least 1 hour, or overnight for better flavor. 3. Preheat the grill to medium-high heat. 4. Grill the lamb chops for about 3-4 minutes per side for medium-rare, or adjust the cooking time according to your desired doneness. 5. Remove from the grill and let them rest for a few minutes before serving."
//     },
//     {
//       title: "Classic Tiramisu",
//       ingredients: "Ladyfingers, espresso coffee, mascarpone cheese, sugar, egg yolks, cocoa powder",
//       instructions: "1. Brew strong espresso coffee and let it cool. 2. In a mixing bowl, whisk together mascarpone cheese, sugar, and egg yolks until creamy and well combined. 3. Dip each ladyfinger into the cooled espresso coffee and arrange them in a single layer in a serving dish. 4. Spread a layer of the mascarpone mixture over the ladyfingers. Repeat the layers until all the ladyfingers and mascarpone mixture are used, ending with a layer of mascarpone on top. 5. Dust the top with cocoa powder. 6. Cover and refrigerate for at least 4 hours, or overnight for best results. 7. Serve chilled and enjoy!"
//     },
//     {
//       title: "Baked Salmon with Lemon-Dill Sauce",
//       ingredients: "Salmon fillets, lemon juice, fresh dill, garlic, olive oil, salt, black pepper",
//       instructions: "1. Preheat the oven to 375°F (190°C) and line a baking sheet with parchment paper. 2. In a small bowl, whisk together lemon juice, minced garlic, chopped fresh dill, olive oil, salt, and black pepper to make the sauce. 3. Place the salmon fillets on the prepared baking sheet and brush them with the lemon-dill sauce. 4. Bake in the preheated oven for about 12-15 minutes, or until the salmon is cooked through and flakes easily with a fork. 5. Serve the baked salmon with extra lemon-dill sauce on the side."
//     },
//     {
//       title: "Homemade Margherita Pizza",
//       ingredients: "Pizza dough, tomato sauce, mozzarella cheese, fresh basil leaves, olive oil, salt, black pepper",
//       instructions: "1. Preheat the oven to the highest temperature (usually 500°F or 260°C). 2. Roll out the pizza dough into a round shape on a floured surface. 3. Transfer the rolled-out dough to a baking sheet or pizza stone. 4. Spread tomato sauce evenly over the dough, leaving a small border around the edges. 5. Arrange slices of mozzarella cheese over the sauce. 6. Tear fresh basil leaves and scatter them on top of the cheese. 7. Drizzle olive oil over the pizza and sprinkle with salt and black pepper. 8. Bake in the preheated oven for about 10-12 minutes, or until the crust is golden and the cheese is bubbly and slightly browned. 9. Remove from the oven and let it cool for a few minutes before slicing and serving."
//     },
//     {
//       title: "Chicken and Vegetable Stir-Fry",
//       ingredients: "Chicken breast, mixed vegetables (such as bell peppers, broccoli, carrots), soy sauce, oyster sauce, garlic, ginger, vegetable oil, cornstarch",
//       instructions: "1. Slice the chicken breast into thin strips. 2. In a small bowl, mix together soy sauce, oyster sauce, minced garlic, grated ginger, and cornstarch to make the sauce. Set aside. 3. Heat vegetable oil in a wok or large skillet over high heat. 4. Add the sliced chicken and stir-fry until cooked through. 5. Add the mixed vegetables and continue stir-frying until they are tender-crisp. 6. Pour the sauce over the chicken and vegetables, and stir to coat evenly. 7. Cook for another minute until the sauce thickens. 8. Remove from heat and serve the stir-fry over steamed rice or noodles."
//     },
//     {
//       title: "Caprese Stuffed Portobello Mushrooms",
//       ingredients: "Portobello mushrooms, fresh mozzarella cheese, cherry tomatoes, fresh basil leaves, balsamic glaze, olive oil, salt, black pepper",
//       instructions: "1. Preheat the oven to 400°F (200°C) and line a baking sheet with parchment paper. 2. Remove the stems from the portobello mushrooms and gently scrape out the gills with a spoon. 3. Drizzle olive oil over the mushrooms and season with salt and black pepper. 4. Place the mushrooms on the prepared baking sheet, gill side up. 5. Fill each mushroom cap with slices of fresh mozzarella cheese, halved cherry tomatoes, and torn basil leaves. 6. Drizzle balsamic glaze over the stuffed mushrooms. 7. Bake in the preheated oven for about 15-20 minutes, or until the mushrooms are tender and the cheese is melted and bubbly. 8. Serve the caprese stuffed portobello mushrooms as a delicious appetizer or main course."
//     },
//     {
//       title: "Homemade Chocolate Chip Cookies",
//       ingredients: "Butter, granulated sugar, brown sugar, eggs, vanilla extract, all-purpose flour, baking soda, salt, chocolate chips",
//       instructions: "1. Preheat the oven to 375°F (190°C) and line a baking sheet with parchment paper. 2. In a mixing bowl, cream together softened butter, granulated sugar, and brown sugar until light and fluffy. 3. Beat in the eggs, one at a time, and then stir in the vanilla extract. 4. In a separate bowl, whisk together all-purpose flour, baking soda, and salt. Gradually add the dry ingredients to the butter mixture and mix until well combined. 5. Fold in the chocolate chips. 6. Drop rounded tablespoons of cookie dough onto the prepared baking sheet, spacing them apart. 7. Bake in the preheated oven for about 10-12 minutes, or until the edges are golden brown. 8. Remove from the oven and let the cookies cool on the baking sheet for a few minutes before transferring them to a wire rack to cool completely."
//     },
//     {
//       title: "Vegetable Pad Thai",
//       ingredients: "Rice noodles, tofu, bell peppers, bean sprouts, carrots, green onions, garlic, peanuts, lime, soy sauce, tamarind paste, brown sugar",
//       instructions: "1. Cook rice noodles according to package instructions, then drain and set aside. 2. In a wok or large skillet, heat oil over medium heat. Add tofu and cook until browned and crispy. 3. Push tofu to one side of the wok and add bell peppers, bean sprouts, carrots, and green onions. Stir-fry for a few minutes until vegetables are slightly tender. 4. In a small bowl, whisk together garlic, peanuts, lime juice, soy sauce, tamarind paste, and brown sugar to make the sauce. 5. Pour the sauce over the vegetables and tofu, and add the cooked rice noodles. Toss everything together until well coated. 6. Cook for an additional 2-3 minutes to heat through. 7. Serve the vegetable pad Thai hot, garnished with extra peanuts and lime wedges."
//     },
//     {
//       title: "Chicken Enchiladas",
//       ingredients: "Cooked chicken, tortillas, enchilada sauce, shredded cheese, onion, bell peppers, garlic, cumin, chili powder, salt, black pepper",
//       instructions: "1. Preheat the oven to 350°F (175°C). Grease a baking dish. 2. In a skillet, heat olive oil over medium heat. Add chopped onion, sliced bell peppers, and minced garlic. Sauté until vegetables are softened. 3. Add cooked chicken, cumin, chili powder, salt, and black pepper to the skillet. Stir to combine and cook for a few minutes. 4. Warm tortillas in the microwave or on a skillet until pliable. 5. Spread a small amount of enchilada sauce on each tortilla. 6. Spoon the chicken mixture onto the tortillas and roll them up tightly. Place them seam-side down in the prepared baking dish. 7. Pour the remaining enchilada sauce over the rolled tortillas. Sprinkle shredded cheese on top. 8. Bake in the preheated oven for about 20-25 minutes, or until the cheese is melted and bubbly. 9. Remove from the oven and let the enchiladas cool for a few minutes before serving. Garnish with chopped cilantro, if desired."
//     },
//     {
//       title: "Pesto Pasta",
//       ingredients: "Pasta, fresh basil, pine nuts, garlic, Parmesan cheese, olive oil, salt, black pepper",
//       instructions: "1. Cook pasta according to package instructions, then drain and set aside. 2. In a food processor, combine fresh basil, pine nuts, minced garlic, grated Parmesan cheese, olive oil, salt, and black pepper. Blend until smooth and well combined. 3. In a large mixing bowl, toss the cooked pasta with the pesto sauce until evenly coated. 4. Adjust the seasoning to taste. 5. Serve the pesto pasta warm, garnished with additional grated Parmesan cheese and fresh basil leaves."
//     },
//     {
//       title: "Stuffed Bell Peppers",
//       ingredients: "Bell peppers, ground beef, rice, onion, garlic, tomato sauce, shredded cheese, Italian seasoning, salt, black pepper",
//       instructions: "1. Preheat the oven to 375°F (190°C). Cut the tops off the bell peppers and remove the seeds and membranes. 2. In a skillet, cook ground beef over medium heat until browned. Drain any excess grease. 3. In the same skillet, add chopped onion and minced garlic. Sauté until the onion is translucent. 4. Add cooked rice, tomato sauce, Italian seasoning, salt, and black pepper to the skillet. Stir to combine. 5. Spoon the beef and rice mixture into the bell peppers, filling them to the top. 6. Place the stuffed bell peppers in a baking dish and cover with foil. 7. Bake for about 30-35 minutes, or until the peppers are tender. 8. Remove the foil, sprinkle shredded cheese on top of each pepper, and bake for an additional 5 minutes or until the cheese is melted and bubbly. 9. Let the stuffed bell peppers cool for a few minutes before serving."
//     },
//     {
//       title: "Shrimp Scampi",
//       ingredients: "Shrimp, garlic, lemon juice, white wine, butter, olive oil, parsley, salt, black pepper, red pepper flakes",
//       instructions: "1. In a large skillet, heat olive oil and melt butter over medium heat. Add minced garlic and red pepper flakes. Sauté for a minute until fragrant. 2. Add shrimp to the skillet and cook until they turn pink, stirring occasionally. 3. Pour in white wine and lemon juice. Simmer for a few minutes until the liquid reduces slightly. 4. Season with salt and black pepper to taste. 5. Remove from heat and stir in chopped parsley. 6. Serve the shrimp scampi hot, garnished with additional parsley and lemon wedges. Pair with crusty bread or pasta, if desired."
//     },
//     {
//       title: "Avocado Toast",
//       ingredients: "Bread, avocado, lemon juice, red pepper flakes, salt, black pepper, olive oil",
//       instructions: "1. Toast the bread slices until golden and crispy. 2. In a bowl, mash the avocado with a fork. Add lemon juice, red pepper flakes, salt, and black pepper. Mix well. 3. Spread the avocado mixture evenly onto the toasted bread slices. 4. Drizzle with olive oil and sprinkle with additional red pepper flakes, if desired. 5. Serve the avocado toast as a delicious and nutritious breakfast or snack."
//     },
//     {
//       title: "Strawberry Shortcake",
//       ingredients: "Strawberries, shortcake biscuits, whipped cream, sugar",
//       instructions: "1. Wash and slice the strawberries. Sprinkle them with sugar and let them macerate for about 30 minutes to release their juices. 2. Prepare the shortcake biscuits according to your favorite recipe or use store-bought ones. 3. Slice the shortcake biscuits in half horizontally. 4. Spoon a generous amount of macerated strawberries onto the bottom half of each biscuit. 5. Top with a dollop of whipped cream. 6. Place the top half of the biscuit on the whipped cream. 7. Serve the strawberry shortcakes immediately and enjoy!"
//     },
//     {
//       title: "Mango Sticky Rice",
//       ingredients: "Sticky rice, mangoes, coconut milk, sugar, salt, sesame seeds",
//       instructions: "1. Soak sticky rice in water for at least 4 hours or overnight. Drain the rice and steam it until cooked and sticky. 2. In a saucepan, heat coconut milk, sugar, and salt over medium heat until the sugar dissolves. Remove from heat and let it cool. 3. Peel and slice the mangoes. 4. Serve the sticky rice on a plate, topped with sliced mangoes. 5. Drizzle the coconut milk sauce over the rice and mangoes. 6. Sprinkle sesame seeds on top as a garnish. 7. Enjoy the delicious and tropical mango sticky rice!"
//     },
//     {
//       title: "Chocolate Lava Cake",
//       ingredients: "Dark chocolate, butter, eggs, sugar, all-purpose flour, salt, vanilla ice cream, raspberries (optional)",
//       instructions: "1. Preheat the oven to 425°F (220°C). Grease individual ramekins or oven-safe cups. 2. In a microwave-safe bowl, melt the dark chocolate and butter together. Stir until smooth. 3. In a separate bowl, whisk together eggs and sugar until well combined. 4. Slowly pour the melted chocolate mixture into the egg mixture, whisking constantly. 5. Add all-purpose flour and salt, and stir until just combined. 6. Divide the batter evenly among the prepared ramekins. 7. Bake for about 12-14 minutes, or until the edges are set but the center is still slightly jiggly. 8. Remove the ramekins from the oven and let them cool for a few minutes. 9. Carefully invert each ramekin onto a plate, and remove it to reveal the gooey chocolate lava center. 10. Serve the chocolate lava cakes warm, accompanied by a scoop of vanilla ice cream and fresh raspberries, if desired."
//     },
//     {
//       title: "Beef Stir-Fry",
//       ingredients: "Beef (sirloin or flank steak), soy sauce, sesame oil, garlic, ginger, vegetables (broccoli, bell peppers, carrots, snap peas), cornstarch, vegetable oil, green onions, salt, black pepper",
//       instructions: "1. Thinly slice the beef against the grain and place it in a bowl. 2. In a separate bowl, whisk together soy sauce, sesame oil, minced garlic, and grated ginger to make the marinade. Pour the marinade over the beef slices and let them marinate for about 20-30 minutes. 3. In a small bowl, dissolve cornstarch in water to make a slurry. Set aside. 4. Heat vegetable oil in a wok or large skillet over high heat. Add the marinated beef (reserving the marinade) and stir-fry until browned. Remove the beef from the pan and set it aside. 5. In the same pan, add the vegetables (broccoli, bell peppers, carrots, snap peas, or any other vegetables of your choice). Stir-fry until they are crisp-tender. 6. Return the beef to the pan with the vegetables. 7. Pour the reserved marinade over the beef and vegetables. Stir in the cornstarch slurry to thicken the sauce. 8. Cook for an additional 2-3 minutes until the sauce coats the beef and vegetables. 9. Season with salt and black pepper to taste. 10. Garnish with chopped green onions and serve the beef stir-fry hot over steamed rice or noodles."
//     },
//     {
//       title: "Lemon Herb Roasted Chicken",
//       ingredients: "Whole chicken, lemon, garlic, fresh herbs (such as rosemary, thyme, and parsley), olive oil, salt, black pepper",
//       instructions: "1. Preheat the oven to 425°F (220°C). 2. Rinse the whole chicken and pat it dry with paper towels. 3. Season the chicken generously with salt and black pepper, both inside and out. 4. Cut the lemon into wedges and stuff them inside the chicken cavity along with a few garlic cloves and a handful of fresh herbs. 5. Tie the chicken legs together with kitchen twine to keep the stuffing inside. 6. Place the chicken on a roasting rack in a roasting pan. 7. Drizzle olive oil over the chicken and rub it all over the skin. 8. Sprinkle additional salt, black pepper, and chopped fresh herbs over the chicken. 9. Roast the chicken in the preheated oven for about 1 hour and 15 minutes, or until the internal temperature reaches 165°F (74°C) when measured with a meat thermometer. 10. Remove the chicken from the oven and let it rest for 10-15 minutes before carving. 11. Serve the lemon herb roasted chicken with your favorite side dishes and enjoy!"
//     }
//   ];

//   await Recipe.bulkCreate(recipeData);

//   const userData = [
//     // your user data here
//     {
//       username: "kj",
//       email: "kj@gmail.com",
//       password: "123",
//       recipeId: 1
//     }
//   ];
//   await User.bulkCreate(userData);

//   process.exit(0);
// };

// seedAll();


