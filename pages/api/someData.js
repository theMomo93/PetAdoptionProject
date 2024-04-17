const data = {
  "animals": [
    {
      "type": "dog",
      "name": "Buddy",
      "breed": "Golden Retriever",
      "size": "big",
      "personality": "Friendly, loyal, and playful",
      "image":"https://img.freepik.com/free-photo/retriver_658691-636.jpg?t=st=1713343871~exp=1713347471~hmac=b3ff2db8eb5ec5e366ddfb9fda2a18293f79ff8d1e438e1d979576bbd7b33249&w=1060"
    },
    {
      "type": "dog",
      "name": "Luna",
      "breed": "German Shepherd",
      "size": "big",
      "personality": "Intelligent, confident, and alert",
      "image": "https://img.freepik.com/free-photo/dog-german-shepherd-lying-grass-park_8353-6406.jpg?t=st=1713343925~exp=1713347525~hmac=33933a9d925c55b98586631f09ec07a5a9495c3a3e2bc55df39270d2b368c938&w=1060"
    },
    {
      "type": "dog",
      "name": "Max",
      "breed": "Beagle",
      "size": "medium",
      "personality": "Curious, friendly, and merry",
      "image": "https://img.freepik.com/free-photo/funny-happy-beagle-dog-walking-playing-park_176420-6453.jpg?t=st=1713343953~exp=1713347553~hmac=d8a0156505f669f3220ae63c8cce70e8d2c456e26e68b5b27c9cf2a54be8b6ee&w=1060"
    },
    {
      "type": "dog",
      "name": "Bailey",
      "breed": "Labrador Retriever",
      "size": "big",
      "personality": "Outgoing, even-tempered, and gentle",
      "image": "https://img.freepik.com/free-photo/happy-dog-walking-outdoors_23-2149004560.jpg?t=st=1713343993~exp=1713347593~hmac=9b6a73b5c9172335ac9e37611935c581e9bef33d9498c4f409a71c965a4fc672&w=1060"
    },
    {
      "type": "dog",
      "name": "Coco",
      "breed": "Poodle",
      "size": "big",
      "personality": "Smart, active, and alert",
      "image": "https://img.freepik.com/free-photo/looking-up-brown-cute-poodle-puppy-sitting-ground_8353-6012.jpg?t=st=1713344025~exp=1713347625~hmac=78e421bc694b269689322bd09855819d033c7b980cdc9372fc1c828d052bd67e&w=1060"
    },
    {
      "type": "dog",
      "name": "Rocky",
      "breed": "Boxer",
      "size": "medium",
      "personality": "Playful, energetic, and strong",
      "image": "https://img.freepik.com/free-photo/cute-boxer-dog-standing-park_181624-34999.jpg?t=st=1713344064~exp=1713347664~hmac=9e5c1e91cc06da285c1e74d4b334d871e93302ecaa690ececbd362034853cc78&w=1060"
    },
    {
      "type": "dog",
      "name": "Zoe",
      "breed": "Shih Tzu",
      "size": "small",
      "personality": "Affectionate, outgoing, and alert",
      "image": "https://img.freepik.com/free-photo/light-brown-dog-mal-shih-breed-front-white-wall_181624-23713.jpg?t=st=1713344099~exp=1713347699~hmac=f556a51d7287dcade72cb1ff5ab801827c7d49dc988affbbcd87a4a7b99d0a4a&w=1060"
    },
    {
      "type": "dog",
      "name": "Milo",
      "breed": "Dachshund",
      "size": "small",
      "personality": "Clever, lively, and devoted",
      "image": "https://img.freepik.com/free-photo/truffle-mushroom-plant-trained-dog-happy-finding-expensive-truffles-forest_342744-1349.jpg?t=st=1713344130~exp=1713347730~hmac=e0f889da54cb23083f16b6a3cdff9841370bad60c96dad60695b3636635da280&w=1060"
    },
    {
      "type": "dog",
      "name": "Ruby",
      "breed": "Siberian Husky",
      "size": "big",
      "personality": "Outgoing, alert, and gentle",
      "image": "https://img.freepik.com/free-photo/gorgeous-profile-siberian-husky-dog_493961-939.jpg?t=st=1713344154~exp=1713347754~hmac=57e33e8f3e363784882b93869fbea9919b4f3e45643d1201611ebd1702fbae90&w=1060"
    },
    {
      "type": "dog",
      "name": "Charlie",
      "breed": "French Bulldog",
      "size": "medium",
      "personality": "Adaptable, playful, and smart",
      "image": "https://img.freepik.com/free-photo/happy-woman-sitting-with-cute-pug-room-with-loft-interior_613910-8896.jpg?t=st=1713344197~exp=1713347797~hmac=db2edfc3ac2f53825ef1fb24520877eb1b4546fa610b2fda6fba4028495d7d1c&w=1060"
    },
    {
      "type": "cat",
      "name": "Whiskers",
      "breed": "Persian",
      "personality": "Gentle, quiet, and affectionate",
      "image": "https://img.freepik.com/free-photo/pets-beautiful-house-animal-gray_1122-1872.jpg?t=st=1713344257~exp=1713347857~hmac=d8d88a362e0116f2c741dee7c79e64969d76a9dfbe031c73b4541b7a04ee763a&w=1060"
    },
    {
      "type": "cat",
      "name": "Mittens",
      "breed": "Siamese",
      "personality": "Vocal, social, and affectionate",
      "image": "https://img.freepik.com/free-photo/stunning-cream-gray-siamese-cat-with-pale-blue-eyes_493961-447.jpg?t=st=1713344283~exp=1713347883~hmac=d0d99b84a08e9f90af2055e8df18d6b6f920e4d337067543f14c452774bc124a&w=1060"
    },
    {
      "type": "cat",
      "name": "Shadow",
      "breed": "Maine Coon",
      "personality": "Laid-back, friendly, and sociable",
      "image": "https://img.freepik.com/free-photo/winter-mood-beautiful-kitten-siberian-cat-sitting-sofa-covered-with-brown-blanket_155003-24251.jpg?t=st=1713344319~exp=1713347919~hmac=e3d4fa7059ad0bee9d88f611b5bc3c820efee55115c227548f6f4205e9967bd5&w=1060"
    },
    {
      "type": "cat",
      "name": "Oreo",
      "breed": "Domestic Shorthair",
      "personality": "Playful, independent, and curious",
      "image": "https://img.freepik.com/free-photo/cute-cat-spending-time-indoors_23-2150649171.jpg?t=st=1713344348~exp=1713347948~hmac=572a1e2f2d9ac26a5c68ad3ec7ba2a6611ed6c127cabd73c4ce550c3bdff5dac&w=1060"
    },
    {
      "type": "cat",
      "name": "Tiger",
      "breed": "Bengal",
      "personality": "Active, playful, and adventurous",
      "image": "https://img.freepik.com/free-photo/bengal-cat-stands-yellow-bed_8353-534.jpg?t=st=1713344381~exp=1713347981~hmac=8923a23b4ad17917d46679a2d0d40c17e72bb3594dace127fec9c64e814179e6&w=1060"
    },
    {
      "type": "cat",
      "name": "Lily",
      "breed": "Ragdoll",
      "personality": "Relaxed, gentle, and affectionate",
      "image": "https://img.freepik.com/free-photo/ragdoll-cat-breed-vase-narcissus_2829-13955.jpg?t=st=1713344902~exp=1713348502~hmac=f998d6cee08fed1ed217f24176695e7f9a4ed21bc30ab816ec6e3d4d37104110&w=1060"
    },
    {
      "type": "cat",
      "name": "Smokey",
      "breed": "Scottish Fold",
      "personality": "Sweet-tempered, charming, and easygoing",
      "image": "https://img.freepik.com/free-photo/adorable-british-shorthair-kitty-with-monochrome-wall-her_23-2148955095.jpg?t=st=1713344934~exp=1713348534~hmac=d1e7ea459ab019ee9c16e2a37c034bf88a6bb46cb35693be6b9893111108b4d5&w=1060"
    },
    {
      "type": "cat",
      "name": "Cleo",
      "breed": "Sphynx",
      "personality": "Curious, social, and affectionate",
      "image": "https://img.freepik.com/free-photo/pet-cat-lifestyle-portraits_23-2149169933.jpg?t=st=1713344976~exp=1713348576~hmac=f3b14ce9dfc14cba39f9a21a5091a9fc21282613f0e12fa82c6d79e5010493ae&w=1060"
    },
    {
      "type": "cat",
      "name": "Leo",
      "breed": "Abyssinian",
      "personality": "Energetic, playful, and social",
      "image": "https://img.freepik.com/free-photo/purebred-abyssinian-young-cat-portrait_155003-1424.jpg?t=st=1713345008~exp=1713348608~hmac=21cff385cd3e80701b54a0b08f7d7bbd0ce64a1bf40723cb209891197cea9698&w=1060"
    },
    {
      "type": "cat",
      "name": "Nala",
      "breed": "British Shorthair",
      "personality": "Easygoing, reserved, and adaptable",
      "image": "https://img.freepik.com/free-photo/british-shorthair-kitty-with-monochrome-wall-her_23-2148955103.jpg?t=st=1713345051~exp=1713348651~hmac=60cbfd72eb8c3b3b14719b65526e8b978430ec82b1ccf874a1efcd0cd97be4f7&w=1060"
    },
    {
      "type": "rabbit",
      "name": "Thumper",
      "breed": "Holland Lop",
      "personality": "Gentle, affectionate, and playful",
      "image":"https://img.freepik.com/free-photo/close-up-rabbit-lying-green-grass_23-2147924102.jpg?t=st=1713345076~exp=1713348676~hmac=ccd9d8103c388e77548a74bc666b8effd5aa2e865e85c145b7eec0fa4a2aa15e&w=1060"
    },
    {
      "type": "rabbit",
      "name": "Cotton",
      "breed": "Angora",
      "personality": "Curious, docile, and social",
      "image": "https://img.freepik.com/free-photo/closeup-grey-scale-shot-white-rabbit-dark_181624-22799.jpg?t=st=1713345115~exp=1713348715~hmac=c8cfe9f57f2583ecc04b60f75bfabbc0354cb2d32d271bf8bebded0553881737&w=1060"
    },
    {
      "type": "rabbit",
      "name": "Bunny",
      "breed": "Mini Rex",
      "personality": "Playful, friendly, and intelligent",
      "image":"https://img.freepik.com/free-photo/cute-bunny-farm_23-2147758823.jpg?t=st=1713345146~exp=1713348746~hmac=053cd763efffbc04454f734044e5e6a718bc0b09e9f4aa77f6095845cc7b5dce&w=1060"
    },
    {
      "type": "rabbit",
      "name": "Snowball",
      "breed": "Netherland Dwarf",
      "personality": "Energetic, curious, and social",
      "image":"https://img.freepik.com/free-photo/retro-nature-picture-fauna_23-2149728467.jpg?t=st=1713345187~exp=1713348787~hmac=ec9a32acdf5698f1c5cb04b253307cfbeb829acd3f81e560f40865b76fc66f90&w=1060"
    }
  ]
}
export default data