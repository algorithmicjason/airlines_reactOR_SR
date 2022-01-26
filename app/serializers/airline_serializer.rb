class AirlineSerializer
  include JSONAPI::Serializer
  attributes :name, :slug, :img_url, :avg_rate
  has_many :reviews
end
