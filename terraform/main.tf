terraform {
  backend "gcs" {
    bucket = "terraform-katsukiniwa-dev"
  }
}

provider "google" {
  project = var.gcp_project_id
  region  = var.primary_region
}

resource "google_storage_bucket" "sample_bucket" {
  name          = "sample-bucket-katsukiniwa-dev"
  location      = "asia-northeast1"
}
