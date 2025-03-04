<script setup>
import NavComponent from './NavComponent.vue';
import { ref, reactive } from 'vue';
const data = reactive({
    name: '',
    address: '',
    email: '',
    phone: '',
    date: '',
    invoiceNumber: '',
    items: [{
        description: '',
        price: '',
        qty: '',
        total: ''
    }],
    note: '',
    subtotal: '',
    discount: '',
    tax: '',
    grandtotal: ''
});

function addMoreItem(){
    data.items.push({
        description: '',
        price: '',
        qty: '',
        total: ''
    })
}

function getSubtotal(){
    let subtotal = 0;
    data.items.forEach(item => {
        subtotal += item.total;
    })
    data.subtotal = subtotal;
    return subtotal;
}

function getGrandTotal(){
    let grandTotal = 0;
    const discount = data.subtotal * (data.discount / 100);
    const subtotalDiscount = data.subtotal - discount;
    const tax = subtotalDiscount * (data.tax / 100);
    grandTotal = subtotalDiscount + tax;
    data.grandtotal = grandTotal;
    return grandTotal;
}
</script>

<template>
<section>
    <div>
        <NavComponent/>
    </div>
    <div>
        <div class="container mx-auto bg-[#0d97ff] w-full h-[5px] my-5"></div>
        <section class="container mx-auto flex justify-between items-center">
            <img src="@/assets/pictures/logo-header.png" alt="">
            <div>
                <h1 class="font-bold">Email</h1>
                <p class="text-[#4B4B4B]">info@gmail.com</p>
                <p class="text-[#4B4B4B]">hello@gmail.com</p>
            </div>
            <div>
                <h1 class="font-bold">Phone</h1>
                <p class="text-[#4B4B4B]">+880 1500-000000</p>
                <p class="text-[#4B4B4B]">+880 1500-000000</p>
            </div>
            <div>
                <h1 class="font-bold">Address</h1>
                <p class="text-[#4B4B4B]">MUSAFIR House,<br>Ghatail - 1980</p>
            </div>
        </section>
        <div class="container mx-auto bg-[#0d97ff] w-full h-[1px] my-5"></div>
        <section class="container mx-auto flex justify-between items-center">
            <div class="flex flex-col gap-3">
                <p class="text-[#4B4B4B] font-semibold">Invoice To :</p>
                <input v-model="data.name" class="border border-[#00000] rounded-sm w-[450px] focus:outline-[#0d97ff] pl-1" placeholder="Name" type="text" name="" id="name">
                <input v-model="data.address" class="border border-[#00000 rounded-sm w-[450px] focus:outline-[#0d97ff] pl-1" placeholder="Address" type="text" name="" id="address">
                <input v-model="data.email" class="border border-[#00000] rounded-sm w-[450px] focus:outline-[#0d97ff] pl-1" placeholder="Email" type="email" name="" id="email">
                <input v-model="data.phone" class="border border-[#00000] rounded-sm w-[450px] focus:outline-[#0d97ff] pl-1" placeholder="Phone Number" type="tel" name="" id="phone">
            </div>
            <div class="flex flex-col items-center">
                <h1 class="text-[#4B4B4B] font-semibold text-[50px]">INVOICE</h1>
                <div class="bg-[#0d97ff] rounded-sm flex justify-between items-center gap-13 p-5">
                    <div>
                        <h1 class="text-[#EDEDED] font-semibold">Grand Total :</h1>
                        <input :value="getGrandTotal()" readonly class="text-[#FFFFFF] font-bold outline-none focus:outline-none">
                    </div>
                    <div>
                        <h1 class="text-[#EDEDED] font-semibold">Invoice Date :</h1>
                        <input v-model="data.date" class="border border-[#FFFFFF] text-[#FFFFFF] focus:outline-[#0d97ff] rounded-sm p-1" type="date" name="" id="date">
                    </div>
                    <div>
                        <h1 class="text-[#EDEDED] font-semibold">Invoice No :</h1>
                       <input v-model="data.invoiceNumber" class="border border-[#FFFFFF] focus:outline-[#0d97ff] rounded-sm p-1" type="text" name="" id="invoiceNumber">
                    </div>
                </div>
            </div>
        </section>
        <section class="container mx-auto mt-5">
            <div class="bg-[#FFFFFF] border border-[#EDEDED] text-[#0d97ff] font-bold flex items-center p-3">
                <p>Item</p>
                <p class="pl-150">Price</p>
                <p class="pl-73">Qty</p>
                <p class="pl-58">Total</p>
            </div>
            <div v-for="(item, index) in data.items" :key="index" class="flex justify-between items-center bg-[#EDEDED] my-1 p-3">
                <input v-model="item.description" class="border rounded-sm focus:outline-[#0d97ff] pl-3 w-[400px]" placeholder="Description" type="text" name="" id="description">
                <input v-model="item.price" class="border rounded-sm focus:outline-[#0d97ff] pl-3 w-[150px]" placeholder="Price" type="number" name="" id="price">
                <input v-model="item.qty" class="border rounded-sm focus:outline-[#0d97ff] pl-3 w-[150px]" placeholder="Qty" type="number" name="" id="qty">
                <p class="text-[#4B4B4B]" id="total">${{item.total = item.price * item.qty}}</p>
            </div>
            <button @click="addMoreItem()" class="bg-[#006400] rounded-sm px-4 py-2 text-[#FFFFFF] mt-3">Add More</button>
        </section>
        <section class="container mx-auto flex justify-between items-center mt-5">
            <div>
                <h1 class="font-bold mb-3">Important Note :</h1>
                <input v-model="data.note" class="border border-[#4B4B4B] focus:outline-[#0d97ff] h-[100px] w-[450px] p-1" type="text" name="" id="note" style="vertical-align: text-top;">
            </div>
            <div class="flex flex-col gap-3">
                <h1 class="text-[#00000] font-bold flex gap-16">Subtotal<input :value="getSubtotal()" readonly class="outline-none focus:outline-none" type="number" name="" id="subtotal"></h1>
                <h1 class="text-[#FF0000] font-bold flex gap-10">Discount<input v-model="data.discount" class="border rounded-sm w-full focus:outline-[#0d97ff] pl-5" placeholder="%" type="number" name="" id="discount"></h1>
                <h1 class="text-[#00000] font-semibold flex gap-21">Tax<input v-model="data.tax" class="border rounded-sm w-full focus:outline-[#0d97ff] pl-5" placeholder="%" type="number" name="" id="tax"></h1>
                <h1 class="bg-[#0d97ff] rounded-sm text-[#FFFFFF] font-bold p-1 flex gap-10">Grand Total<input :value="getGrandTotal()" readonly class="outline-none focus:outline-none" type="number" name="" id="grandtotal"></h1>
            </div>
        </section>
        <div class="container mx-auto bg-[#0d97ff] w-full h-[1px] my-5"></div>
        <section class="container mx-auto my-3">
            <p>{{ data }}</p>
        </section>
        <div class="container mx-auto bg-[#0d97ff] w-full h-[5px] my-5"></div>
    </div>
</section>
</template>

<style scoped>

</style>