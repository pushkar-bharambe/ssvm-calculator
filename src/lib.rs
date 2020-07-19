use wasm_bindgen::prelude::*;

//Add two numbers

#[wasm_bindgen]
pub fn add(params: &str) -> String {
  let num: (f32, f32) = serde_json::from_str(&params).unwrap();
  let addition: f32 = num.0 + num.1;
  return serde_json::to_string(&addition).unwrap();
}
