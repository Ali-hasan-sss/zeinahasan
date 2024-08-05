<template>
    <div>
        <div class="container latest-section">
            <div class="title">
                <div class="container content">
                    <div class="row justify-content-center">
                        <div
                            class="father col-12 col-md-8 d-flex align-item-center justify-content-center"
                        >
                            <img
                                src="@/assets/Icons/ALMOTTHEDON COMPANY Logo (3)1.png"
                                alt="icon"
                                width="200px"
                                class="d-none d-xl-block"
                            />
                            <h2 class="text-center text-light">
                                LATEST PRODUCTS
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pro-content">
                <div
                    v-for="product in products"
                    :key="product.id"
                    class="card-container"
                >
                    <ProductCard
                        class="product"
                        :id="product.id"
                        :image="product.image"
                        :title="product.title"
                        :price="product.price"
                        :description="product.description"
                    />
                </div>
            </div>
            <div class="radio">
                <div class="ratio ratio1"></div>
                <div class="ratio"></div>
                <div class="ratio"></div>
                <div class="ratio"></div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from "@/components/productCard.vue";
import headphoneImage from "@/assets/Images/levitating-music-headphones-display.jpg";
import appliancesImage from "@/assets/Images/home-appliances-group-white-refrigerator-washing-machine-stove-microwave-oven-vacuum-cleaner-isolated-white-background-3d.jpg";
import necklaceImage from "@/assets/Images/beautiful-luxury-necklace-jewelry-stand-neck.jpg";
export default {
    name: "LatestSection",
    components: { ProductCard },
    data() {
        return {
            products: [
                {
                    id: 1,
                    image: headphoneImage,
                    title: "Head Phones",
                    price: "AED 250",
                    description: "High quality headphones."
                },
                {
                    id: 2,
                    image: appliancesImage,
                    title: "Home Appliances",
                    price: "AED 1500",
                    description: "Latest home appliances."
                },
                {
                    id: 3,
                    image: necklaceImage,
                    title: "Luxury Necklace",
                    price: "AED 300",
                    description: "Beautiful luxury necklace."
                }
            ]
        };
    }
};
</script>

<style scoped>
.latest-section {
    margin-top: 20px;
    width: 100%;
}
.radio {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    gap: 10px;
}
.ratio {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fde044b2;
    cursor: pointer;
}
.ratio1 {
    width: 15px;
    height: 15px;
}
.father {
    width: 100%;
    min-height: 100px;
    position: relative;
    margin-top: 20px;
}
.father img {
    position: absolute;
    top: 40px;
    left: 33%;
}
.product {
    box-shadow: none;
    color: white;
    width: 350px;
    height: 450px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
}
.pro-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
</style>
