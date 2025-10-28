# first package : 
-- npm i gsap @gsap/react three @react-three/fiber @react-three/drei @react-three/postprocessing

# tailwind kustomisasi :
- @theme { --color-white-50: }  INI UNTUK KUSTOMISASI VARIABEL YANG SUDAH ADA
- @layer utilities { .flex-center: } INI UNTUK MENAMBAHKAN STYLE BARU

# Render .glb Ke Component : 
```
    Anda dapat melakukan renderer ini dengan mudah menggunakan package gltf / gltfjsx Dimana dia akan bertugas 
melakukkan migrate .glb ke component React sehingga nanti penggunaan nya jadi sederhana cukup dengan menambahkan 
component tadi di dalam sebuah Canvas. 
```
##### Berikut langkah langkah menggunakan gltf converter nya 
- pindah ke lokasi anda menyimpan models 3d misal : ./public/models/object.glb 
- kemudian jalankan perintah : npx gltfjsx object.glb 
- silahkan klik enter atau Y untuk migrasi 
- kemudian dia akan memberikan di lokasi yang sama component react dari glb yang sudah di migrate.
- next silahkan kalian render component tersebut ke canvas.

### Bingung Karena Element <mesh /> <ambientLight /> <spotLight /> dll tidak dikenali ?
```
Tenang saja solusinya adalah 
```