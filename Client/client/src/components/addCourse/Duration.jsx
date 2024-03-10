import React from 'react'

export default function Duration() {
    return (
        <div>
            <div class="wrapper">
                <div class="card">
                    <input class="input" type="radio" name="card" value="basic" />
                        <span class="check"></span>
                        <label class="label">
                            <div class="title">BASIC</div>
                            <div class="price">
                                <span class="span">$</span>
                                15
                                <span class="span">/month</span>
                            </div>
                        </label>
                </div>
                <div class="card">
                    <input class="input" type="radio" name="card" value="standart" />
                        <span class="check"></span>
                        <label class="label">
                            <div class="title">STANDART</div>
                            <div class="price">
                                <span class="span">$</span>
                                30
                                <span class="span">/month</span>
                            </div>
                        </label>
                </div>
                <div class="card">
                    <input class="input" type="radio" name="card" value="premium" />
                        <span class="check"></span>
                        <label class="label">
                            <div class="title">PREMIUM</div>
                            <div class="price">
                                <span class="span">$</span>
                                60
                                <span class="span">/month</span>
                            </div>
                        </label>
                </div>
            </div>
        </div>
    )
}
