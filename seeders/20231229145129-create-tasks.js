"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "tasks",
      [
        {
          uuid: "19ca3fd9-252f-41d8-b1ff-445a1044d101",
          title: "Study RxJS",
          // image:
          //   "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRKGPGKv_07lmUB8glvIeoCvRTSZOD9mP4YmyLc-fX8u8rD7DEP",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
          categoryId: 1,
          task_date: "2023-12-20",
          priority_level: "Medium",
          progress_level: "Started",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          uuid: "19ca3fd9-252f-41d8-b1ff-445a1044d102",
          title: "Study C# OOP",
          // image:
          //   "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWR5fGVufDB8fDB8fHww",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
          categoryId: 3,
          task_date: "2024-01-10",
          priority_level: "Medium",
          progress_level: "Pending",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-20",
        },
        {
          uuid: "19ca3fd9-252f-41d8-b1ff-445a1044d103",
          title: "Ionic Task Manager Assignment",
          // image:
          //   "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSUQkrqdTqaNN_pkDmi2mzF9MJYoDsn4gEEqdJtzQiSjoGGmVib",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
          categoryId: 1,
          task_date: "2024-01-10",
          priority_level: "High",
          progress_level: "Pending",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          uuid: "19ca3fd9-252f-41d8-b1ff-445a1044d104",
          title: "Clear snow around house",
          // image:
          //   "https://images.unsplash.com/photo-1483385573908-0a2108937c4a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvdmVsJTIwc25vd3xlbnwwfHwwfHx8MA%3D%3D",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
          categoryId: 2,
          task_date: "2023-12-14",
          priority_level: "Low",
          progress_level: "Completed",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          uuid: "19ca3fd9-252f-41d8-b1ff-445a1044d105",
          title: "Renew Gym Memebership",
          // image:
          //   "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww",

          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
          categoryId: 4,
          task_date: "2024-01-03",
          priority_level: "High",
          progress_level: "Pending",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          uuid: "19ca3fd9-252f-41d8-b1ff-445a1044d106",
          title: "Dinner at Earls",
          // image:
          //   "https://images.unsplash.com/photo-1605926637512-c8b131444a4b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlubmVyJTIwZWFybHN8ZW58MHx8MHx8fDA%3D",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
          categoryId: 5,
          task_date: "2023-12-29",
          priority_level: "High",
          progress_level: "Completed",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          uuid: "19ca3fd9-252f-41d8-b1ff-445a1044d108",
          title: "Watch Movie",
          // image:
          //   "https://images.unsplash.com/photo-1547130542-00f463cf8c0c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2F0Y2glMjBtb3ZpZXxlbnwwfHwwfHx8MA%3D%3D",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
          categoryId: 5,
          task_date: "2023-12-30",
          priority_level: "Medium",
          progress_level: "Pending",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          uuid: "19ca3fd9-252f-41d8-b1ff-445a1044d107",
          title: "Biking",
          // image:
          //   "https://plus.unsplash.com/premium_photo-1677371174846-51410325aa93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlrZXN8ZW58MHx8MHx8fDA%3D",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
          categoryId: 4,
          task_date: "2023-12-29",
          priority_level: "Medium",
          progress_level: "Started",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("tasks", null, {});
  },
};
