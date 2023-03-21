import React from "react";

const Mhs = (props) => {
    return (
        <div className="mahasiswa">
            <div class="card text-center">
                <div class="view overlay">
                    <div class="card-img-top">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWk795GC-S5erf5IcqEFDDXi-1Ufi9rnjrYA&usqp=CAU" alt="Gambar Mahasiswa" />
                    </div>
                </div>
                <div class="card-body content-center">
                    <h4 class="card-title" className="nama-mahasiswa">{props.nama}</h4>
                    <p className="nim-mahasiswa">NIM : {props.nim}</p>
                    <p className="alamat-mahasiswa">Alamat : {props.alamat}</p>
                    <p className="hp-mahasiswa">No Handphone : {props.hp}</p>
                    <p className="angkatan-mahasiswa">Angkatan : {props.angkatan}</p>
                    <p className="status-mahasiswa">Status : {props.status}</p>
                    <button type="button" className="btn btn-danger" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
                </div>
            </div>
        </div>

    )
}

export default Mhs;